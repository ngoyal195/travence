import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travence | Premium Luggage Bags</title>
        <meta
          name="description"
          content="Travence manufactures and trades premium luggage bags including backpacks, duffels, trolleys, and more."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20">
          {/* Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Premium Luggage <br /> For Every Journey
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Durable. Stylish. Trusted by travelers worldwide.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#products"
                className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
              >
                View Collection
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 mt-10 md:mt-0 md:ml-10">
            <img
              src="/hero-bag.png"
              alt="Travence Luggage"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Our Collection
          </h2>
          <p className="mt-2 text-gray-600">
            Backpacks, Duffels, Trolleys, Office Bags & More
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Cabin Lite", img: "/bag1.png" },
              { name: "Expander 24", img: "/bag2.png" },
              { name: "Business Roller", img: "/bag3.png" },
            ].map((product) => (
              <div
                key={product.name}
                className="border rounded-2xl shadow-sm hover:shadow-lg transition p-6"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">About Travence</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            At Travence, we design and trade luggage bags that combine style,
            strength, and innovation. From backpacks and duffels to premium
            trolleys, we provide solutions for every journey. Our collection
            includes trusted brands like Safari, VIP, American Tourister,
            Aristocrat, Skybags, and more.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose Travence
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4 text-center">
            <div>
              <span className="text-4xl">🧳</span>
              <h3 className="mt-4 text-xl font-semibold">Durable Materials</h3>
            </div>
            <div>
              <span className="text-4xl">🌍</span>
              <h3 className="mt-4 text-xl font-semibold">Wide Range</h3>
            </div>
            <div>
              <span className="text-4xl">🛡️</span>
              <h3 className="mt-4 text-xl font-semibold">Warranty Assured</h3>
            </div>
            <div>
              <span className="text-4xl">🚚</span>
              <h3 className="mt-4 text-xl font-semibold">Wholesale + Retail</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-900 text-white text-center"
      >
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-gray-300">
          Have bulk orders or want to explore our collection? We’d love to hear
          from you.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:info@travence.com"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Email Us
          </a>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            className="px-6 py-3 border border-white rounded-lg hover:bg-gray-800 transition"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-400">
        <p>© {new Date().getFullYear()} Travence. All rights reserved.</p>
      </footer>
    </>
  );
}
