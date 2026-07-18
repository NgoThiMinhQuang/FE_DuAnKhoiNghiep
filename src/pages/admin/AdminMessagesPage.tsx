import { useCallback, useEffect, useMemo, useState } from 'react'
import AdminLayout, { AdminIcon } from '../../components/AdminLayout'
import { apiRequest } from '../../services/api'
import './AdminMessagesPage.css'

type Status = 'MOI' | 'DANG_XU_LY' | 'DA_XU_LY'
type Message = {
  id: string
  fullName: string
  email: string
  phone?: string
  subject?: string
  content: string
  status: Status
  adminNote?: string
  handledBy?: string
  createdAt: string
}
type Result = { items: Message[]; pagination: { total: number } }
type AdminReply = { id: string; content: string; sentAt: string; sender: string }

const statusMeta: Record<Status, { label: string; tone: string }> = {
  MOI: { label: 'Tin mới', tone: 'new' },
  DANG_XU_LY: { label: 'Đang xử lý', tone: 'processing' },
  DA_XU_LY: { label: 'Đã xử lý', tone: 'done' },
}

const formatDate = (value: string) => new Intl.DateTimeFormat('vi-VN', {
  dateStyle: 'short',
  timeStyle: 'short',
}).format(new Date(value))

const getReplies = (message: Message): AdminReply[] => {
  if (!message.adminNote) return []
  try {
    const parsed = JSON.parse(message.adminNote) as { replies?: AdminReply[] }
    if (Array.isArray(parsed.replies)) return parsed.replies
  } catch {
    // Dữ liệu cũ chỉ có một ghi chú dạng văn bản.
  }
  return [{ id: `legacy-${message.id}`, content: message.adminNote, sentAt: message.createdAt, sender: message.handledBy || 'Nhân viên hỗ trợ' }]
}

function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<'ALL' | Status>('ALL')
  const [search, setSearch] = useState('')
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    try {
      const data = await apiRequest<Result>('/admin/contacts?limit=100')
      setMessages(data.items)
      setError('')
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Không thể tải tin nhắn')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
    const timer = window.setInterval(() => void load(), 30000)
    return () => window.clearInterval(timer)
  }, [load])

  const filtered = useMemo(() => {
    const key = search.trim().toLocaleLowerCase('vi')
    return messages.filter((message) => (
      (filter === 'ALL' || message.status === filter)
      && (!key || [message.fullName, message.email, message.phone ?? '', message.content]
        .some((value) => value.toLocaleLowerCase('vi').includes(key)))
    ))
  }, [filter, messages, search])

  const selected = messages.find((message) => message.id === selectedId) ?? null
  const count = (status?: Status) => status
    ? messages.filter((message) => message.status === status).length
    : messages.length

  const update = async (message: Message, status: Status, sendReply = false) => {
    if (sendReply && !note.trim()) return
    setSaving(true)
    try {
      const replies = getReplies(message)
      if (sendReply) replies.push({
        id: `${Date.now()}`,
        content: note.trim(),
        sentAt: new Date().toISOString(),
        sender: 'Nhân viên hỗ trợ',
      })
      const adminNote = JSON.stringify({ replies })
      await apiRequest(`/admin/contacts/${message.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status, adminNote }),
      })
      const next = { ...message, status, adminNote }
      setMessages((items) => items.map((item) => item.id === message.id ? next : item))
      if (sendReply) setNote('')
      setError('')
      window.dispatchEvent(new Event('admin-contacts-updated'))
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : 'Không thể cập nhật tin nhắn')
    } finally {
      setSaving(false)
    }
  }

  const open = (message: Message) => {
    setSelectedId(message.id)
    setNote('')
    if (message.status === 'MOI') {
      setMessages((items) => items.map((item) => item.id === message.id
        ? { ...item, status: 'DANG_XU_LY' }
        : item))
      void apiRequest(`/admin/contacts/${message.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: 'DANG_XU_LY', adminNote: message.adminNote ?? '' }),
      }).then(() => window.dispatchEvent(new Event('admin-contacts-updated'))).catch(() => {
        setError('Không thể chuyển tin nhắn sang trạng thái đang xử lý')
      })
    }
  }

  const filters = [
    ['ALL', 'Tất cả', count()],
    ['MOI', 'Tin mới', count('MOI')],
    ['DANG_XU_LY', 'Đang xử lý', count('DANG_XU_LY')],
    ['DA_XU_LY', 'Đã xử lý', count('DA_XU_LY')],
  ] as const

  return (
    <AdminLayout
      activeItem="messages"
      searchValue={search}
      onSearchChange={setSearch}
      searchPlaceholder="Tìm tên, email, số điện thoại..."
    >
      <div className="admin-messages-heading">
        <div><span>CHĂM SÓC KHÁCH HÀNG</span><h1>Hộp thư hỗ trợ</h1><p>Quản lý và theo dõi yêu cầu khách hàng theo từng trạng thái.</p></div>
        <button type="button" onClick={() => void load()}>↻ Làm mới</button>
      </div>

      <div className="admin-message-filters" aria-label="Lọc trạng thái tin nhắn">
        {filters.map(([value, label, total]) => (
          <button key={value} className={filter === value ? 'is-active' : ''} onClick={() => setFilter(value)}>
            <span>{label}</span><strong>{total}</strong>
          </button>
        ))}
      </div>

      {error && <div className="admin-message-error" role="alert">{error}</div>}

      <section className={`admin-message-workspace${selected ? ' has-selection' : ''}`}>
        <aside className="admin-message-inbox">
          <header>
            <div><strong>Tin nhắn đến</strong><span>{filtered.length} hội thoại</span></div>
            <i>{count('MOI')} chưa đọc</i>
          </header>
          <div className="admin-message-list">
            {loading ? (
              <div className="admin-message-empty">Đang tải...</div>
            ) : filtered.length === 0 ? (
              <div className="admin-message-empty"><AdminIcon name="message" /><strong>Chưa có tin nhắn</strong></div>
            ) : filtered.map((message) => (
              <button
                className={`admin-message-row${message.status === 'MOI' ? ' is-unread' : ''}${selectedId === message.id ? ' is-selected' : ''}`}
                key={message.id}
                onClick={() => open(message)}
              >
                <span className="admin-message-avatar">{message.fullName.charAt(0).toLocaleUpperCase('vi')}</span>
                <span className="admin-message-copy">
                  <span><strong>{message.fullName}</strong><time>{formatDate(message.createdAt)}</time></span>
                  <b>{message.subject || 'Yêu cầu hỗ trợ'}</b>
                  <p>{message.content}</p>
                  <i className={`is-${statusMeta[message.status].tone}`}>{statusMeta[message.status].label}</i>
                </span>
              </button>
            ))}
          </div>
        </aside>

        <article className="admin-message-conversation">
          {selected ? (
            <>
              <header className="admin-conversation-header">
                <button className="admin-conversation-back" type="button" onClick={() => setSelectedId(null)} aria-label="Quay lại danh sách">←</button>
                <span className="admin-message-avatar">{selected.fullName.charAt(0).toLocaleUpperCase('vi')}</span>
                <div><strong>{selected.fullName}</strong><span>{selected.email}{selected.phone ? ` • ${selected.phone}` : ''}</span></div>
                <i className={`is-${statusMeta[selected.status].tone}`}>{statusMeta[selected.status].label}</i>
              </header>

              <div className="admin-conversation-body">
                <div className="admin-conversation-date"><span>{formatDate(selected.createdAt)}</span></div>
                <div className="admin-chat-message is-customer">
                  <span className="admin-message-avatar">{selected.fullName.charAt(0).toLocaleUpperCase('vi')}</span>
                  <div><strong>{selected.subject || 'Yêu cầu hỗ trợ'}</strong><p>{selected.content}</p><time>{formatDate(selected.createdAt)}</time></div>
                </div>
                {getReplies(selected).map((reply) => (
                  <div className="admin-chat-message is-admin" key={reply.id}>
                    <div><strong>Phản hồi hỗ trợ</strong><p>{reply.content}</p><small>{reply.sender} • {formatDate(reply.sentAt)}</small></div>
                  </div>
                ))}
              </div>

              <footer className="admin-conversation-compose">
                <label htmlFor="admin-message-note">Nội dung xử lý / phản hồi</label>
                <textarea id="admin-message-note" rows={3} value={note} onChange={(event) => setNote(event.target.value)} placeholder="Nhập nội dung đã tư vấn, lịch gọi lại hoặc kết quả xử lý..." />
                <div>
                  <span>Mỗi lần gửi sẽ được thêm vào lịch sử hội thoại.</span>
                  <button type="button" className="is-send" disabled={saving || !note.trim()} onClick={() => void update(selected, 'DANG_XU_LY', true)}>{saving ? 'Đang gửi...' : 'Gửi'}</button>
                  <button type="button" className="is-complete" disabled={saving} onClick={() => void update(selected, 'DA_XU_LY')}>Hoàn tất</button>
                </div>
              </footer>
            </>
          ) : (
            <div className="admin-conversation-placeholder">
              <AdminIcon name="message" />
              <strong>Chọn một tin nhắn để xem nội dung</strong>
              <p>Thông tin khách hàng và lịch sử xử lý sẽ hiển thị tại đây.</p>
            </div>
          )}
        </article>
      </section>
    </AdminLayout>
  )
}

export default AdminMessagesPage
