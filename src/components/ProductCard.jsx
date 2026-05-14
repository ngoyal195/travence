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

    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">

      <Link href={`/product/${product.slug}`}>

        <div className="cursor-pointer">

          <div className="relative bg-gradient-to-b from-gray-50 to-white p-6">

            <div className="aspect-square min-h-[320px] flex items-center justify-center overflow-hidden">

              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
              />

            </div>

            <div className="absolute top-5 left-5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {discount}% OFF
            </div>

          </div>

          <div className="p-6 flex flex-col flex-grow">

            <div>

              <h3 className="text-2xl font-bold text-gray-900 min-h-[64px]">
                {product.name}
              </h3>

              <p className="text-gray-500 mt-1">
                {product.subtitle}
              </p>

              <div className="mt-4 flex items-center gap-3 flex-wrap">

                <span className="text-3xl font-black text-black">
                  ₹{product.offerPrice.toLocaleString()}
                </span>

                <span className="line-through text-gray-400 text-lg">
                  ₹{product.mrp.toLocaleString()}
                </span>

              </div>

              <div className="mt-3 flex flex-wrap gap-2">

                {product.sizes.map((size) => (

                  <span
                    key={size}
                    className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium"
                  >
                    {size}
                  </span>

                ))}

              </div>

            </div>

            <div className="mt-6 flex flex-wrap gap-2 min-h-[120px]">

              {product.features.map((feature) => (

                <div
                  key={feature}
                  className="px-3 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                >
                  {feature}
                </div>

              ))}

            </div>

            <div className="mt-auto pt-6">

              <button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-semibold transition-all">
                View Details
              </button>

            </div>

          </div>

        </div>

      </Link>

    </div>

  );
}
