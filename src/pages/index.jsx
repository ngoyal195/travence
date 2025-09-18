// index.jsx — replace homepage with minimalist hero + products
import Link from "next/link";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import products from "../lib/products";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Comfort. Durability. Travel.</p>
              <h1 className="text-4xl md:text-6xl leading-tight">
                Travel smart. <br /> Travel strong.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-gray-700">
                Durable trolley bags designed for the modern traveler. Lightweight frames, 360° spinners, and a lifetime wheel warranty.
              </p>

              <div className="mt-8 flex gap-4 items-center">
                <Link href="/shop" legacyBehavior>
                  <a className="btn-primary">Shop Trolleys</a>
                </Link>

                <Link href="/compare" legacyBehavior>
                  <a className="btn-ghost">Compare models →</a>
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                Free shipping over ₹5,000 • 30-day returns • Lifetime wheel warranty
              </div>
            </div>

            {/* Right: hero image */}
            <div className="flex justify-center">
              {/* Use relative path so GitHub Pages resolves correctly */}
              <img src="/travence/images/hero-trolley.jpg" alt="Travence trolley" className="rounded-2xl shadow-xl w-full max-w-[520px] object-cover" />
            </div>
          </div>
        </section>

        {/* Slim best sellers */}
        <section className="container mt-12 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Best sellers</h2>
            <Link href="/shop" legacyBehavior><a className="text-sm text-brand-accent">See all</a></Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0,3).map(p => (
              <div key={p.id} className="product-card">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        <footer className="site-footer container">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <strong>Travence</strong>
              <div className="mt-3 text-sm text-gray-600">Made for journeys — built to last.</div>
            </div>

            <div className="mt-6 md:mt-0 text-sm text-gray-600">
              © {new Date().getFullYear()} Travence • <span className="ml-2">Privacy • Terms</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
