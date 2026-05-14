import { useState } from "react";
import products from "../lib/products";
import Header from "../components/Header";

export default function ComparePage() {
  const [product1Slug, setProduct1Slug] = useState(products[0]?.slug || "");
  const [product2Slug, setProduct2Slug] = useState(products[1]?.slug || "");

  const product1 = products.find((p) => p.slug === product1Slug);
  const product2 = products.find((p) => p.slug === product2Slug);

  const renderFeature = (feature) => (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-black"></div>
      <span>{feature}</span>
    </div>
  );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f8f8f8] py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">
              Compare Products
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Choose any two Travence products and compare features side-by-side.
            </p>
          </div>

          {/* Selectors */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">

            {/* Product 1 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Select First Product
              </label>

              <select
                value={product1Slug}
                onChange={(e) => setProduct1Slug(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              >
                {products.map((product) => (
                  <option key={product.slug} value={product.slug}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Select Second Product
              </label>

              <select
                value={product2Slug}
                onChange={(e) => setProduct2Slug(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              >
                {products.map((product) => (
                  <option key={product.slug} value={product.slug}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Compare Cards */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT PRODUCT */}
            {product1 && (
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <div className="bg-gray-100 p-8 flex justify-center">
                  <img
                    src={product1.images[0]}
                    alt={product1.name}
                    className="h-80 object-contain"
                  />
                </div>

                <div className="p-8">

                  <h2 className="text-3xl font-bold text-gray-900">
                    {product1.name}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {product1.subtitle}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="text-3xl font-bold text-black">
                      ₹{product1.offerPrice}
                    </span>

                    <span className="line-through text-gray-400 text-lg">
                      ₹{product1.mrp}
                    </span>
                  </div>

                  <div className="mt-8 space-y-4 text-gray-700">

                    <div>
                      <span className="font-semibold">Sizes:</span>{" "}
                      {product1.sizes.join(", ")}
                    </div>

                    <div>
                      <span className="font-semibold">Colors:</span>{" "}
                      {product1.colors.join(", ")}
                    </div>

                    <div>
                      <span className="font-semibold">Warranty:</span>{" "}
                      {product1.warranty}
                    </div>

                    <div>
                      <span className="font-semibold">Weight:</span>{" "}
                      {product1.weight}
                    </div>

                    <div>
                      <span className="font-semibold">Dimensions:</span>{" "}
                      {product1.dims}
                    </div>

                    <div>
                      <span className="font-semibold">Rating:</span>{" "}
                      ⭐ {product1.rating}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-8">
                    <h3 className="font-bold text-xl mb-4">
                      Features
                    </h3>

                    <div className="space-y-3">
                      {product1.features.map((feature, idx) => (
                        <div key={idx}>
                          {renderFeature(feature)}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* RIGHT PRODUCT */}
            {product2 && (
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <div className="bg-gray-100 p-8 flex justify-center">
                  <img
                    src={product2.images[0]}
                    alt={product2.name}
                    className="h-80 object-contain"
                  />
                </div>

                <div className="p-8">

                  <h2 className="text-3xl font-bold text-gray-900">
                    {product2.name}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {product2.subtitle}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="text-3xl font-bold text-black">
                      ₹{product2.offerPrice}
                    </span>

                    <span className="line-through text-gray-400 text-lg">
                      ₹{product2.mrp}
                    </span>
                  </div>

                  <div className="mt-8 space-y-4 text-gray-700">

                    <div>
                      <span className="font-semibold">Sizes:</span>{" "}
                      {product2.sizes.join(", ")}
                    </div>

                    <div>
                      <span className="font-semibold">Colors:</span>{" "}
                      {product2.colors.join(", ")}
                    </div>

                    <div>
                      <span className="font-semibold">Warranty:</span>{" "}
                      {product2.warranty}
                    </div>

                    <div>
                      <span className="font-semibold">Weight:</span>{" "}
                      {product2.weight}
                    </div>

                    <div>
                      <span className="font-semibold">Dimensions:</span>{" "}
                      {product2.dims}
                    </div>

                    <div>
                      <span className="font-semibold">Rating:</span>{" "}
                      ⭐ {product2.rating}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-8">
                    <h3 className="font-bold text-xl mb-4">
                      Features
                    </h3>

                    <div className="space-y-3">
                      {product2.features.map((feature, idx) => (
                        <div key={idx}>
                          {renderFeature(feature)}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </>
  );
}
