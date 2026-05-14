import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import ProductGallery from "../../components/ProductGallery";
import products from "../../lib/products";

export async function getStaticPaths() {
  const paths = products.map((p) => ({
    params: { slug: p.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => p.slug === params.slug) || null;

  return {
    props: { product },
  };
}

function getColorClass(color = "") {
  const c = color.toLowerCase();

  if (c.includes("black")) return "bg-black";
  if (c.includes("silver white")) return "bg-gray-200";
  if (c.includes("silver")) return "bg-gray-300";
  if (c.includes("grey") || c.includes("gray")) return "bg-gray-400";
  if (c.includes("blue")) return "bg-blue-500";
  if (c.includes("pink")) return "bg-pink-400";
  if (c.includes("khakhi") || c.includes("khaki")) return "bg-yellow-700";
  if (c.includes("turquoise")) return "bg-teal-400";
  if (c.includes("sea green")) return "bg-emerald-500";
  if (c.includes("white")) return "bg-white border border-gray-300";
  return "bg-gray-200";
}

function StarRow({ rating = 0 }) {
  const filledStars = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-xl ${i < filledStars ? "text-amber-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-500 font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function ProductPage({ product }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [isCompared, setIsCompared] = useState(false);

  const discount = useMemo(() => {
    if (!product?.mrp || !product?.offerPrice) return 0;
    return Math.round(((product.mrp - product.offerPrice) / product.mrp) * 100);
  }, [product]);

  const relatedProducts = useMemo(() => {
    return products
      .filter((p) => p.slug !== product?.slug)
      .slice(0, 3);
  }, [product]);

  useEffect(() => {
    if (!product) return;

    if (product.sizes?.length) {
      setSelectedSize(product.sizes[0]);
    }

    if (product.colors?.length) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;

    const saved = JSON.parse(localStorage.getItem("compare") || "[]");
    setIsCompared(saved.includes(product.slug));
  }, [product]);

  const toggleCompare = () => {
    if (!product) return;

    const saved = JSON.parse(localStorage.getItem("compare") || "[]");
    const exists = saved.includes(product.slug);

    let next;

    if (exists) {
      next = saved.filter((slug) => slug !== product.slug);
      setIsCompared(false);
    } else {
      next = [...saved, product.slug].slice(0, 2);
      setIsCompared(true);
    }

    localStorage.setItem("compare", JSON.stringify(next));
  };

  if (!product) {
    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
            <h1 className="text-3xl font-black text-gray-900">Product not found</h1>
            <p className="mt-3 text-gray-600">
              The product you are looking for does not exist.
            </p>
            <Link
              href="/shop"
              className="inline-flex mt-6 px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
            >
              Back to Shop
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="bg-[#f7f6f4]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
            <div className="lg:sticky lg:top-24">
              <ProductGallery images={product.images} alt={product.name} />
            </div>

            <div className="bg-white rounded-[28px] border border-gray-100 shadow-[0_18px_50px_rgba(15,23,42,0.06)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-amber-500 text-white px-4 py-2 text-sm font-bold">
                  {discount}% OFF
                </span>

                <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium">
                  {product.warranty}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mt-5 leading-tight">
                {product.name}
              </h1>

              <p className="mt-3 text-lg text-gray-500 leading-relaxed">
                {product.subtitle}
              </p>

              <div className="mt-5">
                <StarRow rating={product.rating} />
              </div>

              <div className="mt-7 flex items-end gap-4 flex-wrap">
                <span className="text-4xl sm:text-5xl font-black text-black">
                  ₹{product.offerPrice.toLocaleString()}
                </span>

                <span className="text-xl sm:text-2xl line-through text-gray-400">
                  ₹{product.mrp.toLocaleString()}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg text-gray-900">
                  Available Sizes
                </h3>

                <div className="flex gap-3 mt-3 flex-wrap">
                  {(product.sizes || []).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2 rounded-full font-medium transition ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg text-gray-900">
                  Available Colors
                </h3>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  {(product.colors || []).map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-9 h-9 rounded-full border-2 transition ${getColorClass(color)} ${
                        selectedColor === color ? "border-black scale-110" : "border-gray-300"
                      }`}
                      title={color}
                      aria-label={color}
                    />
                  ))}

                  <span className="text-sm text-gray-500 font-medium ml-1">
                    {selectedColor}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg text-gray-900">
                  Features
                </h3>

                <div className="flex flex-wrap gap-3 mt-4">
                  {(product.features || []).map((feature) => (
                    <div
                      key={feature}
                      className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm border border-blue-100"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
                <div className="rounded-2xl bg-gray-50 p-4">
                  <div className="text-gray-500">Warranty</div>
                  <div className="mt-1 font-semibold text-gray-900">
                    {product.warranty}
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <div className="text-gray-500">Weight</div>
                  <div className="mt-1 font-semibold text-gray-900">
                    {product.weight}
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <div className="text-gray-500">Dimensions</div>
                  <div className="mt-1 font-semibold text-gray-900">
                    {product.dims}
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-bold transition-all">
                  Add To Cart
                </button>

                <button className="flex-1 border border-gray-300 hover:bg-gray-100 py-4 rounded-2xl font-semibold transition-all">
                  Buy Now
                </button>

                <button
                  onClick={toggleCompare}
                  className={`flex-1 py-4 rounded-2xl font-semibold transition-all border ${
                    isCompared
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-300 hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  {isCompared ? "Added to Compare" : "Add to Compare"}
                </button>
              </div>

              <div className="mt-8 rounded-3xl bg-[#f8f7f5] border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900">Need help choosing?</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Ask the Travence assistant for a recommendation, or reach out to support for guidance.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:support@travencebags.in"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
                  >
                    Email Support
                  </a>

                  <a
                    href="https://wa.me/918527530306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-gray-300 font-semibold hover:bg-white transition"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-orange-500">
                You May Also Like
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
                Related Products
              </h2>
            </div>

            <Link
              href="/shop"
              className="hidden sm:inline-flex px-5 py-3 rounded-full border border-gray-300 font-semibold hover:bg-white transition"
            >
              View All
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-b from-gray-50 to-white p-5">
                  <div className="aspect-square overflow-hidden rounded-2xl flex items-center justify-center">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {item.subtitle}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-2xl font-black text-black">
                      ₹{item.offerPrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{item.mrp.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
