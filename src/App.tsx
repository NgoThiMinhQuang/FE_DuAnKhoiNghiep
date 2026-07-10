import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main className="home-page">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-content">
            <p className="home-eyebrow">Red Bean Beauty</p>
            <h1 id="home-title">Chăm sóc da từ hạt đậu đỏ Việt Nam</h1>
            <p>
              Bộ sản phẩm gồm sữa rửa mặt tạo bọt, mặt nạ tẩy tế bào chết và toner
              dưỡng da đậu đỏ cho chu trình chăm sóc da dịu nhẹ mỗi ngày.
            </p>
            <div className="home-actions">
              <a href="/san-pham">Khám phá sản phẩm</a>
              <a href="/combo-cham-soc-da-toan-dien-dau-do-3-mon-150g">Xem combo</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
