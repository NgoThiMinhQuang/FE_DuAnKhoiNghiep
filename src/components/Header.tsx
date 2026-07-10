import './Header.css'

const menuItems = ['Trang chủ', 'Giới thiệu', 'Sản phẩm', 'Tin tức', 'Liên hệ']

function Header() {
  return (
    <header className="site-header">
      <div className="header-top-line" />

      <div className="header-container header-main">
        <a className="header-logo" href="/" aria-label="Red Bean Beauty">
          {/* Elegant flower/bean blossom logo */}
          <svg className="logo-svg" viewBox="0 0 40 40" aria-hidden="true">
            {/* Center circle */}
            <circle cx="20" cy="20" r="4" fill="#B53740" />
            {/* Petals — 5 rounded petals arranged in a flower pattern */}
            <ellipse cx="20" cy="10" rx="5" ry="8" fill="#D95A63" opacity="0.85" />
            <ellipse cx="29" cy="15" rx="5" ry="8" fill="#C44850" opacity="0.75" transform="rotate(72 29 15)" />
            <ellipse cx="26" cy="26" rx="5" ry="8" fill="#D95A63" opacity="0.7" transform="rotate(144 26 26)" />
            <ellipse cx="14" cy="26" rx="5" ry="8" fill="#C44850" opacity="0.75" transform="rotate(216 14 26)" />
            <ellipse cx="11" cy="15" rx="5" ry="8" fill="#D95A63" opacity="0.8" transform="rotate(288 11 15)" />
            {/* Small inner highlight */}
            <circle cx="20" cy="20" r="2.5" fill="#F0A0A5" opacity="0.6" />
            {/* Tiny leaf accent */}
            <path d="M28 32 C30 28, 34 30, 32 34 C30 36, 28 34, 28 32Z" fill="#7DAF8E" opacity="0.7" />
          </svg>
          <span className="logo-text">RED BEAN BEAUTY</span>
        </a>

        <form className="header-search" role="search">
          <input type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Tìm kiếm sản phẩm" />
          <button type="submit" aria-label="Tìm kiếm">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m16.5 16.5 4 4" />
            </svg>
          </button>
        </form>

        <div className="header-info" aria-label="Thông tin liên hệ">
          <div className="info-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v2.4a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.6 2 2 0 0 1 4.1 1.42h2.4a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L7.63 8.88a16 16 0 0 0 7.49 7.49l1.02-1.02a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span>
              <b>Hotline:</b>
              <br />
              19006750
            </span>
          </div>

          <div className="info-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5h18v14H3z" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span>
              <b>Email:</b>
              <br />
              support@redbean.vn
            </span>
          </div>
        </div>

        <div className="header-actions">
          <a className="account-button" href="/tai-khoan">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 21a8 8 0 0 0-16 0" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Tài khoản
          </a>

          <button className="icon-button wishlist-button" type="button" aria-label="Sản phẩm yêu thích">
            <span className="count-badge">0</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </button>

          <button className="cart-button" type="button">
            <span className="count-badge">0</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 8h12l-1 13H7L6 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
            <span>Cart</span>
          </button>
        </div>
      </div>

      <nav className="header-nav" aria-label="Điều hướng chính">
        <div className="header-container nav-container">
          <ul>
            {menuItems.map((item) => (
              <li key={item}>
                <a className={item === 'Trang chủ' ? 'active' : undefined} href="/">
                  {item}
                  {item === 'Sản phẩm' && <span className="nav-arrow" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>

          <a className="flash-sale" href="/flash-sale">
            <span aria-hidden="true">⚡</span>
            Flash Sale
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
