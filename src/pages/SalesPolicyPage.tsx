import { Link } from 'react-router-dom'
import './ShippingPolicyPage.css'

function SalesPolicyPage() {
  return (
    <main className="shipping-policy-page">
      <nav className="policy-breadcrumb" aria-label="Đường dẫn">
        <div className="policy-container">
          <Link to="/">Trang chủ</Link>
          <span>/</span>
          <strong>Chính sách bán hàng</strong>
        </div>
      </nav>

      <div className="policy-container policy-layout">
        <article className="policy-content">
          <header className="policy-heading">
            <p>Red Bean Beauty</p>
            <h1>Chính sách bán hàng</h1>
            <span aria-hidden="true" />
          </header>

          <section className="policy-introduction">
            <p>
              Red Bean Beauty cung cấp các sản phẩm chăm sóc da từ hạt đậu đỏ qua website, hotline và điểm bán trực tiếp. Chính
              sách này quy định cách đặt hàng, xác nhận đơn, thay đổi giao dịch và áp dụng chương trình ưu đãi.
            </p>
          </section>

          <section className="policy-section">
            <div className="policy-section-title">
              <span>1</span>
              <h2>Hình thức đặt hàng</h2>
            </div>

            <p className="policy-section-note">Khách hàng có thể lựa chọn một trong ba hình thức sau:</p>
            <div className="order-method-grid">
              <div className="order-method-card">
                <div className="order-method-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h18M5 9v11h14V9M4 4h16l1 5H3l1-5ZM9 13h6" /></svg>
                </div>
                <h3>Mua trực tiếp</h3>
                <p>Đến điểm bán của Red Bean Beauty tại Cầu Treo, Yên Mỹ, Hưng Yên để xem và mua sản phẩm.</p>
              </div>

              <div className="order-method-card">
                <div className="order-method-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2 11h11l3-8H6M9 20h.01M18 20h.01" /></svg>
                </div>
                <h3>Đặt hàng trực tuyến</h3>
                <p>Chọn sản phẩm trên website, thêm vào giỏ hàng và cung cấp đầy đủ thông tin nhận hàng.</p>
              </div>

              <div className="order-method-card">
                <div className="order-method-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v2.4a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.6 2 2 0 0 1 4.1 1.42h2.4a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L7.63 8.88a16 16 0 0 0 7.49 7.49l1.02-1.02a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92Z" /></svg>
                </div>
                <h3>Đặt qua hotline</h3>
                <p>Gọi <a href="tel:0986126955">0986126955</a> để được tư vấn sản phẩm và hỗ trợ tạo đơn hàng.</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <div className="policy-section-title">
              <span>2</span>
              <h2>Xác nhận đơn hàng</h2>
            </div>

            <p className="policy-section-note">
              Red Bean Beauty sử dụng thông tin khách hàng cung cấp để kiểm tra và xác nhận đơn hàng trước khi đóng gói.
            </p>
            <ol className="return-process sales-confirmation-process">
              <li>
                <span>01</span>
                <div><h3>Tiếp nhận đơn</h3><p>Hệ thống ghi nhận sản phẩm, số lượng và thông tin người nhận.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><h3>Liên hệ xác nhận</h3><p>Nhân viên có thể gọi điện hoặc gửi tin nhắn để xác minh thông tin cần thiết.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><h3>Đóng gói sản phẩm</h3><p>Đơn được kiểm tra sản phẩm, áp dụng ưu đãi hợp lệ và chuẩn bị giao.</p></div>
              </li>
              <li>
                <span>04</span>
                <div><h3>Bàn giao vận chuyển</h3><p>Khách hàng nhận thông tin giao hàng sau khi đơn được chuyển đi.</p></div>
              </li>
            </ol>

            <div className="policy-evidence-box sales-information-note">
              <h3>Thông tin khách hàng cần cung cấp</h3>
              <p>
                Họ tên người nhận, số điện thoại, địa chỉ giao hàng và ghi chú cần thiết. Khách hàng chịu trách nhiệm về tính chính
                xác của thông tin để tránh chậm trễ hoặc giao hàng không thành công.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <div className="policy-section-title">
              <span>3</span>
              <h2>Thay đổi hoặc hủy đơn hàng</h2>
            </div>

            <ul className="policy-list">
              <li>
                Khách hàng có quyền yêu cầu thay đổi hoặc hủy đơn bằng cách gọi hotline <strong>0986126955</strong> và cung cấp mã
                đơn hàng hoặc số điện thoại đã đặt hàng.
              </li>
              <li>Yêu cầu nên được gửi trước khi đơn hàng được bàn giao cho đơn vị vận chuyển.</li>
              <li>
                Nếu đơn đã được chuyển đi, Red Bean Beauty sẽ hỗ trợ theo tình trạng thực tế; khách hàng có thể phải thanh toán
                chi phí vận chuyển phát sinh.
              </li>
              <li>
                Với đơn hàng đã thanh toán, thời gian hoàn tiền phụ thuộc vào phương thức thanh toán và được thông báo khi yêu cầu
                hủy đơn được xác nhận.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <div className="policy-section-title">
              <span>4</span>
              <h2>Chương trình ưu đãi</h2>
            </div>

            <div className="sales-promotion-box">
              <div>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v8H4v-8M2 7h20v5H2zM12 7v13M12 7H7.5A2.5 2.5 0 1 1 10 4.5L12 7ZM12 7h4.5A2.5 2.5 0 1 0 14 4.5L12 7Z" /></svg>
              </div>
              <p>
                Red Bean Beauty áp dụng các chương trình giảm giá, voucher và quà tặng tại từng thời điểm. Mỗi chương trình có
                thời hạn, sản phẩm và điều kiện áp dụng riêng. Các mã ưu đãi không được cộng dồn, trừ khi chương trình có quy định
                khác.
              </p>
            </div>

            <p className="sales-promotion-link">
              Khách hàng có thể xem các mã đang áp dụng tại <Link to="/san-pham">trang sản phẩm</Link> trước khi đặt hàng.
            </p>
          </section>
        </article>

        <aside className="policy-contact-card">
          <div className="policy-contact-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM8 9h8M8 13h5" /></svg>
          </div>
          <h2>Cần hỗ trợ đặt hàng?</h2>
          <p>Liên hệ Red Bean Beauty để được tư vấn sản phẩm, kiểm tra hoặc thay đổi đơn hàng.</p>
          <a href="tel:0986126955">0986126955</a>
          <a href="mailto:Hoangthingocmai2005@gmail.com">Hoangthingocmai2005@gmail.com</a>
          <Link to="/lien-he">Liên hệ với chúng tôi</Link>
        </aside>
      </div>
    </main>
  )
}

export default SalesPolicyPage
