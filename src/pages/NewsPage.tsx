import { Link } from 'react-router-dom'
import { newsArticles } from '../data/news'
import './NewsPage.css'

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="7" r="3.5" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  )
}

function NewsPage() {
  return (
    <main className="news-page">
      <section className="news-container" aria-labelledby="news-title">
        <header className="news-heading">
          <p>Cẩm nang làm đẹp</p>
          <h1 id="news-title">Tin tức</h1>
          <span aria-hidden="true" />
        </header>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <article className="news-card" key={article.id}>
              <Link className="news-image-link" to={`/tin-tuc/${article.id}`} aria-label={article.title}>
                <img src={article.image} alt={article.title} />
              </Link>

              <div className="news-card-body">
                <h2>
                  <Link to={`/tin-tuc/${article.id}`}>{article.title}</Link>
                </h2>
                <p className="news-excerpt">{article.excerpt}</p>

                <div className="news-meta">
                  <span><UserIcon />Red Bean Beauty</span>
                  <span><CalendarIcon />{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default NewsPage
