import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice, products } from '../data/products'
import type { Product } from '../data/products'
import { getWishlistIds, removeWishlistId } from '../utils/wishlist'
import ProductQuickViewModal from '../components/ProductQuickViewModal'
import './WishlistPage.css'

function WishlistPage() {
  const [wishlistIds, setWishlistIds] = useState(() => getWishlistIds())
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  useEffect(() => {
    const syncWishlist = () => setWishlistIds(getWishlistIds())
    const handleWishlistUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<string[]>
      setWishlistIds(customEvent.detail || getWishlistIds())
    }

    window.addEventListener('storage', syncWishlist)
    window.addEventListener('wishlist-updated', handleWishlistUpdated)

    return () => {
      window.removeEventListener('storage', syncWishlist)
      window.removeEventListener('wishlist-updated', handleWishlistUpdated)
    }
  }, [])

  const wishlistProducts = useMemo(() => {
    return wishlistIds
      .map((id) => products.find((product) => product.id === id))
      .filter((product): product is (typeof products)[number] => Boolean(product))
  }, [wishlistIds])

  const handleRemove = (productId: string) => {
    setWishlistIds(removeWishlistId(productId))
  }

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product)
  }

  const closeQuickView = () => setQuickViewProduct(null)

  return (
    <main className="wishlist-page">
      <section className="wishlist-hero">
        <h1>Danh sách yêu thích của tôi</h1>
      </section>

      <section className="wishlist-container">
        {wishlistProducts.length > 0 ? (
          <div className="wishlist-grid">
            {wishlistProducts.map((product) => (
              <article className="wishlist-card" key={product.id}>
                {product.discount && <span className="wishlist-badge">- {product.discount}%</span>}

                <div className="wishlist-image-wrap">
                  <Link to={`/san-pham/${product.slug}`} className="wishlist-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </Link>

                  <div className="wishlist-hover-actions" aria-label="Tùy chọn sản phẩm yêu thích">
                    <Link to={`/san-pham/${product.slug}`} className="wishlist-action" title="Xem chi tiết" aria-label="Xem chi tiết">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 7h10" />
                        <path d="M18 7h2" />
                        <path d="M4 17h2" />
                        <path d="M10 17h10" />
                        <path d="M4 12h4" />
                        <path d="M12 12h8" />
                        <circle cx="16" cy="7" r="2" />
                        <circle cx="8" cy="17" r="2" />
                        <circle cx="10" cy="12" r="2" />
                      </svg>
                    </Link>

                    <button
                      type="button"
                      className="wishlist-action active"
                      title="Bỏ yêu thích"
                      aria-label={`Bỏ yêu thích ${product.name}`}
                      onClick={() => handleRemove(product.id)}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="wishlist-action"
                      title="Xem nhanh"
                      aria-label="Xem nhanh"
                      onClick={() => openQuickView(product)}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="wishlist-info">
                  <p>RED BEAN BEAUTY</p>
                  <Link to={`/san-pham/${product.slug}`} className="wishlist-name">
                    {product.name}
                  </Link>

                  <div className="wishlist-price">
                    <strong>{formatPrice(product.price)}</strong>
                    {product.originalPrice && <span>{formatPrice(product.originalPrice)}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="wishlist-empty">
            <h2>Danh sách yêu thích đang trống</h2>
            <p>Bạn có thể bấm vào biểu tượng trái tim ở sản phẩm để lưu lại món muốn xem sau.</p>
            <Link to="/san-pham">Xem sản phẩm</Link>
          </div>
        )}
      </section>

      {quickViewProduct && <ProductQuickViewModal product={quickViewProduct} onClose={closeQuickView} />}
    </main>
  )
}

export default WishlistPage
