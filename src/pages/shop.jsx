import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import products from "../lib/products";

function ProductImageSlider({ images = [], name }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!images.length) return;

    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!images.length) return;

    setCurrentImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const activeImage =
    images[currentImage] ||
    images[0] ||
    "/images/bag1.png";

  return (
    <div
      className="
        relative
        bg-gray-100
        dark:bg-[#1D2128]
        h-[340px]
        flex
        items-center
        justify-center
        overflow-hidden
        group
        transition-colors
        duration-500
      "
    >
      <img
        src={activeImage}
        alt={name}
        className="
          w-full
          h-full
          object-contain
          p-6
          transition
          duration-500
          group-hover:scale-105
        "
      />

      {images.length > 1 && (
        <>
          {/* Previous */}
          <button
            type="button"
            onClick={prevImage}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              bg-black/50
              hover:bg-black
              dark:bg-white/20
              dark:hover:bg-white/40
              text-white
              w-9
              h-9
              rounded-full
              transition
              opacity-0
              group-hover:opacity-100
              z-10
              backdrop-blur-sm
            "
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextImage}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              bg-black/50
              hover:bg-black
              dark:bg-white/20
              dark:hover:bg-white/40
              text-white
              w-9
              h-9
              rounded-full
              transition
              opacity-0
              group-hover:opacity-100
              z-10
              backdrop-blur-sm
            "
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    idx === currentImage
                      ? "bg-black dark:bg-white w-5"
                      : "bg-gray-400 dark:bg-gray-600 w-2"
                  }
                `}
                aria-label={`Image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
          <div className="mb-12">
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
              Shop Collection
            </h1>

            <p
              className="
                mt-4
                text-lg
                text-gray-600
                dark:text-gray-400
                max-w-2xl
                transition-colors
                duration-500
              "
            >
              Explore premium luggage engineered for modern travel.
              Cabin trolleys, anti-theft suitcases, business rollers,
              and complete travel sets.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {products.map((product) => {
              const discount = Math.round(
                ((product.mrp - product.offerPrice) / product.mrp) * 100
              );

              return (
                <article
                  key={product.id}
                  className="
                    bg-white
                    dark:bg-[#15181D]
                    rounded-3xl
                    overflow-hidden
                    shadow-sm
                    dark:shadow-black/30
                    hover:shadow-2xl
                    dark:hover:shadow-black/50
                    transition-all
                    duration-300
                    group
                    flex
                    flex-col
                    h-full
                    border
                    border-gray-100
                    dark:border-white/10
                  "
                >
                  {/* Product Image */}
                  <ProductImageSlider
                    images={product.images}
                    name={product.name}
                  />

                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2
                          className="
                            text-2xl
                            font-bold
                            text-gray-900
                            dark:text-white
                            transition-colors
                            duration-300
                          "
                        >
                          {product.name}
                        </h2>

                        <p
                          className="
                            mt-2
                            text-gray-600
                            dark:text-gray-400
                            text-sm
                            leading-relaxed
                            transition-colors
                            duration-300
                          "
                        >
                          {product.subtitle}
                        </p>
                      </div>

                      <div className="shrink-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {discount}% OFF
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mt-5 flex items-center gap-3 flex-wrap">
                      <span
                        className="
                          text-3xl
                          font-bold
                          text-black
                          dark:text-white
                          transition-colors
                          duration-300
                        "
                      >
                        ₹{product.offerPrice.toLocaleString()}
                      </span>

                      <span className="text-lg text-gray-400 line-through">
                        ₹{product.mrp.toLocaleString()}
                      </span>
                    </div>

                    {/* Extra details */}
                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-gray-600
                        dark:text-gray-400
                        transition-colors
                        duration-300
                      "
                    >
                      <span className="font-medium text-yellow-600 dark:text-yellow-400">
                        ★ {product.rating}
                      </span>

                      <span>•</span>

                      <span>{product.warranty}</span>
                    </div>

                    {/* Features */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="
                            px-3
                            py-1
                            rounded-full
                            bg-gray-100
                            dark:bg-[#252A32]
                            text-sm
                            text-gray-700
                            dark:text-gray-300
                            border
                            border-transparent
                            dark:border-white/5
                            transition-colors
                            duration-300
                          "
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto pt-6 flex items-stretch gap-3">
                      <Link
                        href={`/product/${product.slug}`}
                        className="
                          flex-1
                          inline-flex
                          items-center
                          justify-center
                          bg-black
                          dark:bg-white
                          text-white
                          dark:text-black
                          py-3
                          rounded-xl
                          font-semibold
                          hover:bg-gray-800
                          dark:hover:bg-gray-200
                          transition
                          duration-300
                          text-sm
                        "
                      >
                        View Product
                      </Link>

                      <Link
                        href="/compare"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          px-5
                          border
                          border-gray-300
                          dark:border-white/15
                          rounded-xl
                          bg-white
                          dark:bg-[#1D2128]
                          text-gray-900
                          dark:text-white
                          hover:bg-gray-100
                          dark:hover:bg-white/10
                          transition
                          duration-300
                          text-sm
                          font-semibold
                        "
                      >
                        Compare
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
