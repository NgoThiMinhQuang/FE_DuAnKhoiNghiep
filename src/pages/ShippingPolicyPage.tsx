import { Link } from 'react-router-dom'
import './ShippingPolicyPage.css'

function ShippingPolicyPage() {
  return (
    <main className="shipping-policy-page">
      <nav className="policy-breadcrumb" aria-label="Đường dẫn">
        <div className="policy-container">
          <Link to="/">Trang chủ</Link>
          <span>/</span>
          <strong>Chính sách giao hàng</strong>
        </div>
      </nav>

      <div className="policy-container policy-layout">
        <article className="policy-content">
          <header className="policy-heading">
            <p>Red Bean Beauty</p>
            <h1>Chính sách giao hàng</h1>
            <span aria-hidden="true" />
          </header>

          <section className="policy-introduction">
            <p>
              Red Bean Beauty cung cấp dịch vụ giao hàng tận nơi trên toàn quốc cho khách hàng đặt mua sản phẩm qua website,
              fanpage hoặc hotline. Chính sách này không áp dụng cho khách hàng mua và nhận sản phẩm trực tiếp tại điểm bán.
            </p>
            <p>
              Đơn hàng sẽ được chuyển đến địa chỉ khách hàng cung cấp thông qua các đơn vị vận chuyển trung gian do Red Bean
              Beauty lựa chọn.
            </p>
          </section>

          <section className="policy-section">
            <div className="policy-section-title">
              <span>1</span>
              <h2>Thời gian giao hàng</h2>
            </div>

            <div className="delivery-time-grid">
              <div className="delivery-time-card">
                <h3>Hưng Yên và khu vực lân cận</h3>
                <strong>1 - 2 ngày làm việc</strong>
                <p>Đơn đặt trước 11h30 có thể được ưu tiên giao trong ngày tùy khu vực và tình trạng đơn hàng.</p>
              </div>
              <div className="delivery-time-card">
                <h3>Các tỉnh, thành phố khác</h3>
                <strong>2 - 7 ngày làm việc</strong>
                <p>Khoảng 2 - 3 ngày tại khu vực trung tâm và 3 - 7 ngày tại ngoại thành, huyện, xã hoặc thị trấn.</p>
              </div>
            </div>

            <ul className="policy-list">
              <li>Thời gian giao hàng không bao gồm thứ Bảy, Chủ nhật và các ngày lễ, Tết.</li>
              <li>Thời gian xử lý đơn được tính từ khi Red Bean Beauty xác nhận đơn hàng hoặc nhận được thanh toán hoàn tất.</li>
              <li>
                Thời gian giao có thể thay đổi theo yêu cầu của khách hàng hoặc do ảnh hưởng của thời tiết, thiên tai, dịch bệnh
                và các sự kiện đặc biệt khác.
              </li>
              <li>
                Mỗi đơn hàng được giao tối đa 2 lần. Nếu lần đầu không thành công, đơn vị vận chuyển sẽ liên hệ để sắp xếp lần
                giao tiếp theo. Đơn hàng có thể bị hủy nếu không thể liên lạc hoặc không nhận được phản hồi từ khách hàng.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <div className="policy-section-title">
              <span>2</span>
              <h2>Phí giao hàng</h2>
            </div>

            <div className="shipping-fee-box">
              <div>
                <small>Phí giao hàng cố định</small>
                <strong>30.000đ</strong>
              </div>
              <p>
                Áp dụng cho mọi khu vực trên toàn quốc, trừ những đơn hàng đủ điều kiện sử dụng voucher hoặc chương trình miễn
                phí vận chuyển đang diễn ra.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <div className="policy-section-title">
              <span>3</span>
              <h2>Kiểm tra và nhận hàng</h2>
            </div>

            <ul className="policy-list">
              <li>
                Khi nhận hàng, khách hàng vui lòng kiểm tra tên sản phẩm, số lượng và tình trạng bên ngoài của kiện hàng trước
                khi xác nhận với nhân viên giao hàng.
              </li>
              <li>Vui lòng giữ lại mã vận đơn, biên nhận và hóa đơn mua hàng để hỗ trợ đối chiếu khi cần thiết.</li>
              <li>
                Nếu sản phẩm bị thiếu, sai hoặc có dấu hiệu hư hỏng trong quá trình vận chuyển, hãy liên hệ Red Bean Beauty sớm
                nhất để được hỗ trợ.
              </li>
            </ul>
          </section>
        </article>

        <aside className="policy-contact-card">
          <div className="policy-contact-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="18" cy="18" r="2" />
            </svg>
          </div>
          <h2>Cần hỗ trợ đơn hàng?</h2>
          <p>Vui lòng cung cấp họ tên và số điện thoại đặt hàng để được kiểm tra nhanh chóng.</p>
          <a href="tel:0986126955">0986126955</a>
          <a href="mailto:Hoangthingocmai2005@gmail.com">Hoangthingocmai2005@gmail.com</a>
          <Link to="/lien-he">Liên hệ với chúng tôi</Link>
        </aside>
      </div>
    </main>
  )
}

export default ShippingPolicyPage
