import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartToast from './components/CartToast'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import WishlistPage from './pages/WishlistPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CartToast />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/san-pham" element={<ProductsPage />} />
        <Route path="/yeu-thich" element={<WishlistPage />} />
        <Route path="/gio-hang" element={<CartPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/tin-tuc/:id" element={<NewsDetailPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
