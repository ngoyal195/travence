import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductCard({ product }) {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    if (!product.images?.length) return;

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        (prev + 1) % product.images.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, [product.images]);


  const discount = Math.round(
    ((product.mrp - product.offerPrice) / product.mrp) * 100
  );


  return (

    <div
      className="
        group

        bg-white
        dark:bg-[#15181D]

        rounded-3xl

        overflow-hidden

        border
        border-gray-100
        dark:border-white/10

        hover:shadow-2xl
        dark:hover:shadow-black/40

        hover:-translate-y-2

        transition-all
        duration-500

        flex
        flex-col

        h-full
      "
    >

      <Link href={`/product/${product.slug}`}>

        <div className="cursor-pointer">


          {/* ================================================= */}
          {/* PRODUCT IMAGE */}
          {/* ================================================= */}

          <div
            className="
              relative

              bg-gradient-to-b
              from-gray-50
              to-white

              dark:from-[#1D2128]
              dark:to-[#15181D]

              p-6

              transition-colors
              duration-500
            "
          >

            <div
              className="
                aspect-square
                min-h-[320px]

                flex
                items-center
                justify-center

                overflow-hidden
              "
            >

              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="
                  w-full
                  h-full

                  object-contain

                  group-hover:scale-105

                  transition
                  duration-500
                "
              />

            </div>


            {/* ================================================= */}
            {/* DISCOUNT BADGE */}
            {/* ================================================= */}

            <div
              className="
                absolute
                top-5
                left-5

                bg-red-500

                text-white

                text-xs
                font-bold

                px-3
                py-1

                rounded-full

                shadow-md
              "
            >

              {discount}% OFF

            </div>

          </div>


          {/* ================================================= */}
          {/* PRODUCT INFORMATION */}
          {/* ================================================= */}

          <div
            className="
              p-6

              flex
              flex-col

              flex-grow
            "
          >

            <div>


              {/* PRODUCT NAME */}

              <h3
                className="
                  text-2xl
                  font-bold

                  text-gray-900
                  dark:text-white

                  min-h-[64px]

                  transition-colors
                  duration-300
                "
              >

                {product.name}

              </h3>


              {/* SUBTITLE */}

              <p
                className="
                  text-gray-500
                  dark:text-gray-400

                  mt-1

                  transition-colors
                  duration-300
                "
              >

                {product.subtitle}

              </p>


              {/* ================================================= */}
              {/* PRICE */}
              {/* ================================================= */}

              <div
                className="
                  mt-4

                  flex
                  items-center
                  gap-3

                  flex-wrap
                "
              >

                <span
                  className="
                    text-3xl
                    font-black

                    text-black
                    dark:text-white

                    transition-colors
                    duration-300
                  "
                >

                  ₹{product.offerPrice.toLocaleString()}

                </span>


                <span
                  className="
                    line-through

                    text-gray-400

                    text-lg
                  "
                >

                  ₹{product.mrp.toLocaleString()}

                </span>

              </div>


              {/* ================================================= */}
              {/* SIZES */}
              {/* ================================================= */}

              <div
                className="
                  mt-3

                  flex
                  flex-wrap

                  gap-2
                "
              >

                {product.sizes.map((size) => (

                  <span
                    key={size}
                    className="
                      px-3
                      py-1

                      rounded-full

                      bg-gray-100
                      dark:bg-[#252A32]

                      text-gray-700
                      dark:text-gray-300

                      text-sm
                      font-medium

                      border
                      border-transparent
                      dark:border-white/5

                      transition-colors
                      duration-300
                    "
                  >

                    {size}

                  </span>

                ))}

              </div>

            </div>


            {/* ================================================= */}
            {/* FEATURES */}
            {/* ================================================= */}

            <div
              className="
                mt-6

                flex
                flex-wrap

                gap-2

                min-h-[120px]
              "
            >

              {product.features.map((feature) => (

                <div
                  key={feature}
                  className="
                    px-3
                    py-2

                    rounded-full

                    bg-blue-50
                    dark:bg-blue-950/40

                    text-blue-700
                    dark:text-blue-300

                    text-sm
                    font-medium

                    border
                    border-transparent
                    dark:border-blue-900/40

                    transition-colors
                    duration-300
                  "
                >

                  {feature}

                </div>

              ))}

            </div>


            {/* ================================================= */}
            {/* VIEW DETAILS */}
            {/* ================================================= */}

            <div
              className="
                mt-auto
                pt-6
              "
            >

              <button
                className="
                  w-full

                  bg-black
                  dark:bg-white

                  hover:bg-gray-800
                  dark:hover:bg-gray-200

                  text-white
                  dark:text-black

                  py-4

                  rounded-2xl

                  font-semibold

                  transition-all
                  duration-300

                  group-hover:shadow-lg
                  dark:group-hover:shadow-white/10
                "
              >

                View Details

              </button>

            </div>

          </div>

        </div>

      </Link>

    </div>

  );

}
