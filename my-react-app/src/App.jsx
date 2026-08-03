import { useState } from 'react'
import './App.css'
import products from './data/products.json'

function App() {
  const [view, setView] = useState('home')

  return (
    <main className="app-shell">
      {view === 'home' ? (
        <section className="hero-card">
          <p className="eyebrow">Welcome</p>
          <h1>Simple Home Page</h1>
          <p className="subtitle">
            This is a clean starting point for your React app.
          </p>
          <div className="actions">
            <button
              type="button"
              className="primary-link"
              onClick={() => setView('products')}
            >
              Get started
            </button>
            <button
              type="button"
              className="secondary-link"
              onClick={() => setView('products')}
            >
              Learn more
            </button>
          </div>
        </section>
      ) : (
        <section className="products-page" id="products-preview">
          <header className="products-hero">
            <div>
              <p className="eyebrow">Products</p>
              <h1>Featured items to explore</h1>
              <p className="subtitle">
                A small JSON-powered catalog you can expand into a shop, menu,
                or portfolio showcase.
              </p>
            </div>

            <button
              type="button"
              className="ghost-link"
              onClick={() => setView('home')}
            >
              Back to home
            </button>
          </header>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-badge">{product.category}</div>
                <h2>{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                  <span>{product.price}</span>
                  <span>{product.rating} stars</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

export default App
