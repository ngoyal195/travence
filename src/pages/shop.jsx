import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import products from "../lib/products";

export default function ShopPage() {
  return (
    <>
      <Head>
        <title>Shop | Travence</title>

        <meta
          name="description"
          content="Explore the complete Travence luggage collection."
        />
      </Head>

      <Header />

      <main className="min-h-screen bg-[#f8f8f8] py-14">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900">
              Shop Collection
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Explore premium luggage engineered for modern travel.
              Cabin trolleys, anti-theft suitcases, business rollers,
              and complete travel sets.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group"
              >

                {/* Product Image */}
                <div className="bg-gray-100 h-[340px] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full object-contain p-6 group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">

                  <h2 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {product.subtitle}
                  </p>

                  {/* Pricing */}
                  <div className="mt-5 flex items-center gap-3">

                    <span className="text-3xl font-bold text-black">
                      ₹{product.offerPrice}
                    </span>

                    <span className="text-lg text-gray-400 line-through">
                      ₹{product.mrp}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mt-5 flex flex-wrap gap-2">

                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-3">

                    <Link href={`/product/${product.slug}`}>
                      <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                        View Product
                      </button>
                    </Link>

                    <Link href="/compare">
                      <button className="px-5 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
                        Compare
                      </button>
                    </Link>

                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>

      </main>
    </>
  );
}
