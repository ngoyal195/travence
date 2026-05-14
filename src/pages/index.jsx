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
      <section className="relative overflow-hidden bg-[#f8f8f8]">
        
        {/* Ambient Background Effects */}
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-orange-200/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] bg-gray-300/30 rounded-full blur-3xl"></div>

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:42px_42px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-5 py-2 shadow-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>

              <span className="uppercase tracking-[0.25em] text-xs font-semibold text-orange-500">
                Engineered For Modern Travel
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mt-8 tracking-tight">
              Move Through
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
                The World
              </span>

              <br />

              In Style.
            </h1>

            <p className="mt-8 text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
              Premium luggage crafted for airports, highways, business trips,
              and spontaneous adventures. Lightweight shells, TSA security,
              ultra-silent wheels, and timeless design.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#products"
                className="group bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-2xl hover:-translate-y-1"
              >
                Explore Collection
              </a>

              <a
                href="#contact"
                className="bg-white/80 backdrop-blur-md border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300"
              >
                Contact Us
              </a>

            </div>

            {/* Trust Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">

              <div>
                <h3 className="text-3xl font-black">3Y</h3>
                <p className="text-gray-500 mt-1 text-sm">
                  Warranty Coverage
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black">4.8★</h3>
                <p className="text-gray-500 mt-1 text-sm">
                  Customer Rating
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black">360°</h3>
                <p className="text-gray-500 mt-1 text-sm">
                  Spinner Mobility
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">

            {/* Glow */}
            <div className="absolute w-[420px] h-[420px] bg-orange-200/40 rounded-full blur-3xl"></div>

            {/* Floating card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] p-10 w-full max-w-xl hover:-translate-y-2 transition duration-700">

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/70 to-white/20 pointer-events-none"></div>

              <img
                src="/images/hero-bag.png"
                alt="Travence luggage"
                className="relative z-10 w-full h-[520px] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)] hover:scale-105 transition duration-700"
              />

            </div>

          </div>

        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="bg-black text-white py-5 overflow-hidden border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm uppercase tracking-[0.2em] font-semibold">

            <span>360° Spinner Wheels</span>

            <span>TSA Approved Locks</span>

            <span>Premium PP Shell</span>

            <span>Ultra Lightweight</span>

            <span>3 Year Warranty</span>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

            <div>

              <p className="text-orange-500 uppercase tracking-[0.25em] text-sm font-semibold">
                Curated Collection
              </p>

              <h2 className="text-5xl font-black mt-4 leading-tight">
                Designed For
                <br />
                Every Journey
              </h2>

            </div>

            <p className="max-w-xl text-gray-600 text-lg leading-relaxed">
              Discover luggage built for seamless movement, elegant aesthetics,
              and dependable durability wherever travel takes you.
            </p>

          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">

            {products.map((product) => (

              <div
                key={product.id}
                className="transition duration-700 hover:-translate-y-2"
              >
                <ProductCard product={product} />
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BRAND STORY */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white py-28 border-y border-white/5">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/10 blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6">

          <p className="uppercase tracking-[0.3em] text-orange-400 text-sm font-semibold">
            The Travence Philosophy
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mt-6">

            Engineered
            <br />

            For Motion.

          </h2>

          <p className="mt-10 text-stone-400 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">

            Every Travence luggage piece is designed around one idea:
            movement without friction. From airport terminals to business
            travel and weekend escapes, our products combine premium materials,
            smooth mobility, and modern aesthetics into one seamless experience.

          </p>

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "Lightweight Build",
                desc: "Durable PP shell engineered for everyday travel."
              },
              {
                title: "Silent Wheels",
                desc: "Ultra smooth 360° movement across all surfaces."
              },
              {
                title: "Security First",
                desc: "Integrated TSA and anti-theft protection systems."
              },
              {
                title: "Built To Last",
                desc: "Premium craftsmanship backed by warranty coverage."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="bg-[#fafafa] border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition duration-500 hover:-translate-y-1"
              >

                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold">
                  ✦
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden py-24 bg-[#f8f8f8]"
      >

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:42px_42px]"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6">

          <p className="uppercase tracking-[0.25em] text-orange-500 text-sm font-semibold">
            Contact Travence
          </p>

          <h2 className="text-5xl font-black mt-5">
            Need Assistance?
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Retail orders, dealership enquiries, bulk purchases,
            and customer support.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="mailto:support@travencebags.in"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition hover:-translate-y-1"
            >
              Email Support
            </a>

            <a
              href="https://wa.me/918527530306"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition hover:-translate-y-1"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-16 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <img
            src="/images/logo.png"
            alt="Travence"
            className="h-14 mx-auto mb-6"
          />

          <h3 className="text-white text-3xl font-black tracking-[0.2em] uppercase">
            Travence
          </h3>

          <p className="mt-6 max-w-2xl mx-auto leading-relaxed">
            Premium luggage engineered for modern travelers.
            Built for movement, crafted for style.
          </p>

          <div className="mt-10 flex justify-center gap-8 text-sm uppercase tracking-[0.15em]">

            <a href="/shop" className="hover:text-white transition">
              Shop
            </a>

            <a href="/compare" className="hover:text-white transition">
              Compare
            </a>

            <a href="/about" className="hover:text-white transition">
              About
            </a>

            <a href="/support" className="hover:text-white transition">
              Support
            </a>

          </div>

          <div className="mt-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Travence™. All rights reserved.
          </div>

        </div>

      </footer>
    </>
  );
}
