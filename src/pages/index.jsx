import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import products from "../lib/products";

export default function Home(){
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center min-h-[520px]">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Travence — Carry Confidence</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-lg">Lightweight, durable trolleys built for frequent travelers. Lifetime wheel warranty & 30-day returns.</p>
            <div className="mt-6 flex gap-4">
              <a className="btn-primary" href="/shop">Shop Trolleys</a>
              <a className="px-6 py-3 rounded-lg border border-gray-300" href="/compare">Compare models</a>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/images/hero-trolley.jpg" alt="Travence trolley" className="rounded-2xl shadow-lg w-full max-w-[520px]" />
          </div>
        </section>

        {/* Best sellers */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Best sellers</h2>
            <a href="/shop" className="text-sm text-brand-accent">See all</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0,4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </main>
    </>
  );
}
