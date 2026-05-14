import Head from "next/head";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import products from "../lib/products";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travence™ | Premium Travel Luggage</title>
        <meta
          name="description"
          content="Premium luggage crafted for modern journeys."
        />
      </Head>

      <Header />

      {/* HERO */}
      <section className="bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-orange-500 font-semibold">
              Premium Travel Gear
            </p>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight mt-4">
              Travel Smarter.
              <br />
              Travel Better.
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Discover lightweight premium luggage engineered for modern travel.
              Stylish exteriors, ultra smooth wheels, TSA locks, and durable
              craftsmanship.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-black text-white px-7 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Explore Collection
              </a>

              <a
                href="#contact"
                className="border border-gray-300 px-7 py-3 rounded-full font-semibold hover:bg-white transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="bg-white rounded-[32px] shadow-2xl p-8 w-full max-w-lg">
              <img
                src="/images/hero-bag.png"
                alt="Travence luggage"
                className="w-full h-[480px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Collection
              </p>

              <h2 className="text-4xl font-bold mt-2">
                Explore Our Luggage
              </h2>
            </div>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND SECTION */}
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Engineered for Modern Travel
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Every Travence luggage piece is designed with durability,
            lightweight engineering, premium aesthetics, and smooth mobility in
            mind.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 bg-[#f8f8f8]"
      >
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Need Assistance?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Retail orders, dealership enquiries, bulk purchases, and support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:support@travencebags.in"
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Email Support
            </a>

            <a
              href="https://wa.me/918527530306"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img
            src="/images/logo.png"
            alt="Travence"
            className="h-12 mx-auto mb-4"
          />

          <p>
            © {new Date().getFullYear()} Travence™. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
