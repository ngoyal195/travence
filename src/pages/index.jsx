import Head from "next/head";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import products from "../lib/products";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
};

const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
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
        className="
          relative
          overflow-hidden
          bg-[#f8f8f8]
          dark:bg-[#0B0D10]
          transition-colors
          duration-500
        "
      >
        {/* Ambient Background Effects */}
        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            w-[400px]
            h-[400px]
            bg-orange-200/40
            dark:bg-orange-500/10
            rounded-full
            blur-3xl
            transition-colors
            duration-500
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-120px]
            w-[420px]
            h-[420px]
            bg-gray-300/30
            dark:bg-white/[0.03]
            rounded-full
            blur-3xl
            transition-colors
            duration-500
          "
        />

        {/* Grid texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            dark:opacity-[0.04]
            bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            bg-[size:42px_42px]
          "
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div variants={fadeUp} className="relative z-10">
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-white/80
                dark:bg-white/[0.05]
                backdrop-blur-md
                border
                border-gray-200
                dark:border-white/10
                rounded-full
                px-5
                py-2
                shadow-sm
                dark:shadow-black/20
                transition-colors
                duration-500
              "
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />

              <span className="uppercase tracking-[0.25em] text-xs font-semibold text-orange-500">
                Engineered For Modern Travel
              </span>
            </div>

            <h1
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-[0.95]
                mt-8
                tracking-tight
                text-gray-900
                dark:text-white
                transition-colors
                duration-500
              "
            >
              Move Through
              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-black
                  to-gray-500
                  dark:from-white
                  dark:to-gray-500
                "
              >
                The World
              </span>

              <br />

              In Style.
            </h1>

            <p
              className="
                mt-8
                text-gray-600
                dark:text-gray-400
                text-lg
                md:text-xl
                leading-relaxed
                max-w-2xl
                transition-colors
                duration-500
              "
            >
              Premium luggage crafted for airports, highways, business trips,
              and spontaneous adventures. Lightweight shells, TSA security,
              ultra-silent wheels, and timeless design.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="
                  group
                  bg-black
                  dark:bg-white
                  text-white
                  dark:text-black
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-gray-800
                  dark:hover:bg-gray-200
                  transition-all
                  duration-300
                  shadow-2xl
                  hover:-translate-y-1
                "
              >
                Explore Collection
              </a>

              <a
                href="#contact"
                className="
                  bg-white/80
                  dark:bg-white/[0.05]
                  backdrop-blur-md
                  border
                  border-gray-200
                  dark:border-white/10
                  text-gray-900
                  dark:text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-white
                  dark:hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                Contact Us
              </a>
            </div>

            {/* Trust Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                  3Y
                </h3>

                <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                  Warranty Coverage
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                  4.8★
                </h3>

                <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                  Customer Rating
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                  360°
                </h3>

                <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
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
            <div
              className="
                absolute
                w-[420px]
                h-[420px]
                bg-orange-200/40
                dark:bg-orange-500/10
                rounded-full
                blur-3xl
                transition-colors
                duration-500
              "
            />

            {/* Floating card */}
            <div
              className="
                relative
                bg-white/80
                dark:bg-[#15181D]/80
                backdrop-blur-xl
                border
                border-white/50
                dark:border-white/10
                rounded-[40px]
                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                p-10
                w-full
                max-w-xl
                hover:-translate-y-2
                transition
                duration-700
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-[40px]
                  bg-gradient-to-br
                  from-white/70
                  to-white/20
                  dark:from-white/[0.06]
                  dark:to-transparent
                  pointer-events-none
                "
              />

              <img
                src="/images/hero-bag.png"
                alt="Travence luggage"
                className="
                  animate-float
                  relative
                  z-10
                  w-full
                  h-[520px]
                  object-contain
                  drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)]
                  dark:drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]
                  hover:scale-105
                  transition
                  duration-700
                "
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
      <section
        id="products"
        className="
          py-24
          bg-white
          dark:bg-[#0B0D10]
          transition-colors
          duration-500
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-orange-500 uppercase tracking-[0.25em] text-sm font-semibold">
                Curated Collection
              </p>

              <h2
                className="
                  text-5xl
                  font-black
                  mt-4
                  leading-tight
                  text-gray-900
                  dark:text-white
                  transition-colors
                  duration-500
                "
              >
                Designed For
                <br />
                Every Journey
              </h2>
            </div>

            <p
              className="
                max-w-xl
                text-gray-600
                dark:text-gray-400
                text-lg
                leading-relaxed
                transition-colors
                duration-500
              "
            >
              Discover luggage built for seamless movement, elegant
              aesthetics, and dependable durability wherever travel takes you.
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

      {/* BRAND STORY */}
      <section className="relative overflow-hidden bg-[#050505] text-white py-32 border-y border-white/5">
        {/* Ambient Glow Effects */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-orange-500/10 blur-3xl pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.03] blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-2 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />

            <span className="uppercase tracking-[0.25em] text-xs md:text-sm text-orange-300 font-semibold">
              The Travence Philosophy
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="mt-10 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95]">
            <span className="block text-white">Engineered</span>

            <span className="block mt-2 bg-gradient-to-b from-orange-300 via-white to-stone-500 bg-clip-text text-transparent">
              For Motion.
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-12 max-w-3xl mx-auto text-stone-400 text-lg md:text-xl leading-relaxed font-light">
            Every Travence luggage piece is crafted around one principle:
            effortless movement. From crowded terminals to business travel
            and weekend escapes, our luggage blends lightweight engineering,
            smooth mobility, premium durability, and modern aesthetics into
            one seamless travel experience.
          </p>

          {/* Premium Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-black text-white">360°</h3>
              <p className="mt-2 text-sm text-stone-400">
                Silent Spinner Wheels
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-black text-white">PP</h3>
              <p className="mt-2 text-sm text-stone-400">
                Lightweight Shell
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-black text-white">TSA</h3>
              <p className="mt-2 text-sm text-stone-400">
                Secure Lock System
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <h3 className="text-3xl font-black text-white">3Y</h3>
              <p className="mt-2 text-sm text-stone-400">
                Warranty Coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section
        className="
          bg-white
          dark:bg-[#0B0D10]
          py-24
          transition-colors
          duration-500
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Lightweight Build",
                desc: "Durable PP shell engineered for everyday travel.",
              },
              {
                title: "Silent Wheels",
                desc: "Ultra smooth 360° movement across all surfaces.",
              },
              {
                title: "Security First",
                desc: "Integrated TSA and anti-theft protection systems.",
              },
              {
                title: "Built To Last",
                desc: "Premium craftsmanship backed by warranty coverage.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  bg-[#fafafa]
                  dark:bg-[#15181D]
                  border
                  border-gray-100
                  dark:border-white/10
                  rounded-3xl
                  p-8
                  hover:shadow-2xl
                  dark:hover:shadow-black/40
                  transition-all
                  duration-500
                  hover:-translate-y-1
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xl font-bold transition-colors duration-300">
                  ✦
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
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
        className="
          relative
          overflow-hidden
          py-24
          bg-[#f8f8f8]
          dark:bg-[#0F1216]
          transition-colors
          duration-500
        "
      >
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            dark:opacity-[0.04]
            bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            bg-[size:42px_42px]
          "
        />

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.25em] text-orange-500 text-sm font-semibold">
            Contact Travence
          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-5
              text-gray-900
              dark:text-white
              transition-colors
              duration-500
            "
          >
            Need Assistance?
          </h2>

          <p
            className="
              mt-6
              text-gray-600
              dark:text-gray-400
              text-lg
              leading-relaxed
              transition-colors
              duration-500
            "
          >
            Retail orders, dealership enquiries, bulk purchases, and customer
            support.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="mailto:support@travencebags.in"
              className="
                bg-black
                dark:bg-white
                text-white
                dark:text-black
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-gray-800
                dark:hover:bg-gray-200
                transition
                hover:-translate-y-1
              "
            >
              Email Support
            </a>

            <a
              href="https://wa.me/918527530306"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-black
                dark:border-white
                text-gray-900
                dark:text-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-black
                dark:hover:bg-white
                hover:text-white
                dark:hover:text-black
                transition
                hover:-translate-y-1
              "
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
            Premium luggage engineered for modern travelers. Built for
            movement, crafted for style.
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
