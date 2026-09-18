import { useState } from "react";
import products from "../lib/products";
import Header from "../components/Header";

export default function ComparePage() {
  const [product1Slug, setProduct1Slug] = useState(
    products[0]?.slug || ""
  );
  const [product2Slug, setProduct2Slug] = useState(
    products[1]?.slug || ""
  );

  const product1 = products.find(
    (p) => p.slug === product1Slug
  );
  const product2 = products.find(
    (p) => p.slug === product2Slug
  );

  const renderFeature = (feature) => (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-black dark:bg-white"></div>

      <span className="text-gray-700 dark:text-gray-300">
        {feature}
      </span>
    </div>
  );

  return (
    <>
      <Header />

      <main
        className="
          min-h-screen
          bg-[#f8f8f8]
          dark:bg-[#0B0D10]
          py-14
          transition-colors
          duration-500
        "
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1
              className="
                text-5xl
                font-bold
                text-gray-900
                dark:text-white
                transition-colors
                duration-500
              "
            >
              Compare Products
            </h1>

            <p
              className="
                mt-4
                text-lg
                text-gray-600
                dark:text-gray-400
                transition-colors
                duration-500
              "
            >
              Choose any two Travence products and compare
              features side-by-side.
            </p>
          </div>

          {/* Selectors */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">

            {/* Product 1 */}
            <div
              className="
                bg-white
                dark:bg-[#15181D]
                rounded-2xl
                p-5
                shadow-sm
                dark:shadow-black/30
                border
                border-transparent
                dark:border-white/10
                transition-all
                duration-500
              "
            >
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  mb-3
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Select First Product
              </label>

              <select
                value={product1Slug}
                onChange={(e) =>
                  setProduct1Slug(e.target.value)
                }
                className="
                  w-full
                  border
                  border-gray-300
                  dark:border-white/10
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  bg-white
                  dark:bg-[#1D2128]
                  text-gray-900
                  dark:text-white
                  focus:ring-2
                  focus:ring-black
                  dark:focus:ring-white
                  transition-all
                  duration-300
                "
              >
                {products.map((product) => (
                  <option
                    key={product.slug}
                    value={product.slug}
                    className="bg-white dark:bg-[#1D2128] text-gray-900 dark:text-white"
                  >
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Product 2 */}
            <div
              className="
                bg-white
                dark:bg-[#15181D]
                rounded-2xl
                p-5
                shadow-sm
                dark:shadow-black/30
                border
                border-transparent
                dark:border-white/10
                transition-all
                duration-500
              "
            >
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  mb-3
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Select Second Product
              </label>

              <select
                value={product2Slug}
                onChange={(e) =>
                  setProduct2Slug(e.target.value)
                }
                className="
                  w-full
                  border
                  border-gray-300
                  dark:border-white/10
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  bg-white
                  dark:bg-[#1D2128]
                  text-gray-900
                  dark:text-white
                  focus:ring-2
                  focus:ring-black
                  dark:focus:ring-white
                  transition-all
                  duration-300
                "
              >
                {products.map((product) => (
                  <option
                    key={product.slug}
                    value={product.slug}
                    className="bg-white dark:bg-[#1D2128] text-gray-900 dark:text-white"
                  >
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
              <div
                className="
                  bg-white
                  dark:bg-[#15181D]
                  rounded-3xl
                  shadow-xl
                  dark:shadow-black/40
                  overflow-hidden
                  border
                  border-transparent
                  dark:border-white/10
                  transition-all
                  duration-500
                "
              >
                {/* Product Image */}
                <div
                  className="
                    bg-gray-100
                    dark:bg-[#1D2128]
                    p-8
                    flex
                    justify-center
                    transition-colors
                    duration-500
                  "
                >
                  <img
                    src={product1.images[0]}
                    alt={product1.name}
                    className="h-80 object-contain"
                  />
                </div>

                <div className="p-8">

                  <h2
                    className="
                      text-3xl
                      font-bold
                      text-gray-900
                      dark:text-white
                      transition-colors
                      duration-500
                    "
                  >
                    {product1.name}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-gray-600
                      dark:text-gray-400
                      transition-colors
                      duration-500
                    "
                  >
                    {product1.subtitle}
                  </p>

                  {/* Pricing */}
                  <div className="mt-5 flex items-center gap-3">
                    <span
                      className="
                        text-3xl
                        font-bold
                        text-black
                        dark:text-white
                      "
                    >
                      ₹{product1.offerPrice}
                    </span>

                    <span
                      className="
                        line-through
                        text-gray-400
                        dark:text-gray-500
                        text-lg
                      "
                    >
                      ₹{product1.mrp}
                    </span>
                  </div>

                  {/* Specifications */}
                  <div
                    className="
                      mt-8
                      space-y-4
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Sizes:
                      </span>{" "}
                      {product1.sizes.join(", ")}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Colors:
                      </span>{" "}
                      {product1.colors.join(", ")}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Warranty:
                      </span>{" "}
                      {product1.warranty}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Weight:
                      </span>{" "}
                      {product1.weight}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Dimensions:
                      </span>{" "}
                      {product1.dims}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Rating:
                      </span>{" "}
                      ⭐ {product1.rating}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-8">
                    <h3
                      className="
                        font-bold
                        text-xl
                        mb-4
                        text-gray-900
                        dark:text-white
                      "
                    >
                      Features
                    </h3>

                    <div className="space-y-3">
                      {product1.features.map(
                        (feature, idx) => (
                          <div key={idx}>
                            {renderFeature(feature)}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* RIGHT PRODUCT */}
            {product2 && (
              <div
                className="
                  bg-white
                  dark:bg-[#15181D]
                  rounded-3xl
                  shadow-xl
                  dark:shadow-black/40
                  overflow-hidden
                  border
                  border-transparent
                  dark:border-white/10
                  transition-all
                  duration-500
                "
              >
                {/* Product Image */}
                <div
                  className="
                    bg-gray-100
                    dark:bg-[#1D2128]
                    p-8
                    flex
                    justify-center
                    transition-colors
                    duration-500
                  "
                >
                  <img
                    src={product2.images[0]}
                    alt={product2.name}
                    className="h-80 object-contain"
                  />
                </div>

                <div className="p-8">

                  <h2
                    className="
                      text-3xl
                      font-bold
                      text-gray-900
                      dark:text-white
                      transition-colors
                      duration-500
                    "
                  >
                    {product2.name}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-gray-600
                      dark:text-gray-400
                      transition-colors
                      duration-500
                    "
                  >
                    {product2.subtitle}
                  </p>

                  {/* Pricing */}
                  <div className="mt-5 flex items-center gap-3">
                    <span
                      className="
                        text-3xl
                        font-bold
                        text-black
                        dark:text-white
                      "
                    >
                      ₹{product2.offerPrice}
                    </span>

                    <span
                      className="
                        line-through
                        text-gray-400
                        dark:text-gray-500
                        text-lg
                      "
                    >
                      ₹{product2.mrp}
                    </span>
                  </div>

                  {/* Specifications */}
                  <div
                    className="
                      mt-8
                      space-y-4
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Sizes:
                      </span>{" "}
                      {product2.sizes.join(", ")}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Colors:
                      </span>{" "}
                      {product2.colors.join(", ")}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Warranty:
                      </span>{" "}
                      {product2.warranty}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Weight:
                      </span>{" "}
                      {product2.weight}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Dimensions:
                      </span>{" "}
                      {product2.dims}
                    </div>

                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Rating:
                      </span>{" "}
                      ⭐ {product2.rating}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-8">
                    <h3
                      className="
                        font-bold
                        text-xl
                        mb-4
                        text-gray-900
                        dark:text-white
                      "
                    >
                      Features
                    </h3>

                    <div className="space-y-3">
                      {product2.features.map(
                        (feature, idx) => (
                          <div key={idx}>
                            {renderFeature(feature)}
                          </div>
                        )
                      )}
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
