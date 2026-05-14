import Head from "next/head";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import products from "../lib/products";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8
    }
  }
};

const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

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
      <motion.section
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative overflow-hidden bg-[#f8f8f8]"
      >
        {/* Ambient Background Effects */}
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-orange-200/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] bg-gray-300/30 rounded-full blur-3xl"></div>

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:42px_42px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            className="relative z-10"
          >
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

          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            className="relative flex justify-center items-center"
          >
            {/* Glow */}
            <div className="absolute w-[420px] h-[420px] bg-orange-200/40 rounded-full blur-3xl"></div>

            {/* Floating card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] p-10 w-full max-w-xl hover:-translate-y-2 transition duration-700">

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/70 to-white/20 pointer-events-none"></div>

              <img
                src="/images/hero-bag.png"
                alt="Travence luggage"
                className="animate-float relative z-10 w-full h-[520px] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)] hover:scale-105 transition duration-700"
              />

            </div>

          </motion.div>

        </div>
      </motion.section>

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

              <motion.div
                key={product.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="transition duration-700 hover:-translate-y-2"
              >
                <ProductCard product={product} />
              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}
