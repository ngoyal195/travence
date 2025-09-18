import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travence</title>
        <meta
          name="description"
          content="Travence manufactures and trades premium luggage bags including backpacks, duffels, trolleys, and more."
        />
        <link rel="icon" href="images/logo.png" />
      </Head>

      {/* Hero Section */}
      <section className="hero relative bg-gray-50">
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
                Explore Collection
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
              src="images/hero-bag.png"
              alt="Travence Luggage"
              className="w-full"
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

      {/* Brand Story Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Brand Story</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            At Travence, we design and trade luggage bags that combine style,
            strength, and innovation. We believe every journey is unique, and your
            luggage should be a reliable partner. From sleek backpacks for your
            daily commute to durable trolleys for international travel, we are
            committed to delivering quality you can trust.
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Trusted by Travelers</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-600 italic">"The best backpack I've ever owned. Durable and stylish, perfect for my daily commute."</p>
              <p className="mt-4 font-semibold text-gray-800">- Jane D.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-600 italic">"I've traveled all over with my Travence trolley. The quality is amazing and it still looks new."</p>
              <p className="mt-4 font-semibold text-gray-800">- David S.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-600 italic">"Love my new duffel bag. It's so spacious and easy to carry. Highly recommend!"</p>
              <p className="mt-4 font-semibold text-gray-800">- Maria K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold">Ready to get in touch?</h2>
          <p className="mt-4 text-lg">Contact us for bulk orders or any inquiries. We'd love to hear from you.</p>
          <a href="#contact" className="mt-8 inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us Today
          </a>
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
            href="mailto:hellotravence@gmail.com"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Email Us
          </a>
          <a
            href="https://wa.me/+918527530306"
            target="_blank"
            className="px-6 py-3 border border-white rounded-lg hover:bg-gray-800 transition"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-400">
        <p className="mb-2">© {new Date().getFullYear()} Travence. All rights reserved.</p>
        <p>Follow us: <a href="#" className="text-gray-300 hover:text-white transition">Instagram</a> | <a href="#" className="text-gray-300 hover:text-white transition">Facebook</a></p>
      </footer>
    </>
  );
}
