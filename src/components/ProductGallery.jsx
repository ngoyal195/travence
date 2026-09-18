import { useMemo, useState } from "react";

export default function ProductGallery({ images = [], alt = "Product" }) {
  const safeImages = useMemo(
    () =>
      Array.isArray(images) && images.length
        ? images
        : ["/images/logo.png"],
    [images]
  );

  const [selectedImage, setSelectedImage] = useState(safeImages[0]);

  return (
    <div className="space-y-5">
      {/* Main Product Image */}
      <div
        className="
          bg-white
          dark:bg-[#15181D]
          rounded-3xl
          p-5
          sm:p-8
          shadow-[0_18px_50px_rgba(15,23,42,0.08)]
          dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]
          border
          border-gray-100
          dark:border-white/10
          transition-colors
          duration-500
        "
      >
        <div
          className="
            aspect-square
            rounded-2xl
            bg-gradient-to-b
            from-gray-50
            to-white
            dark:from-[#1D2128]
            dark:to-[#15181D]
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
            src={selectedImage}
            alt={alt}
            className="
              w-full
              h-full
              object-contain
              p-4
              transition-transform
              duration-500
              ease-out
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {safeImages.map((src, i) => {
          const isSelected = selectedImage === src;

          return (
            <button
              key={`${src}-${i}`}
              onClick={() => setSelectedImage(src)}
              className={`
                w-24
                h-24
                rounded-2xl
                overflow-hidden
                border-2
                transition-all
                duration-300
                flex-shrink-0

                bg-white
                dark:bg-[#15181D]

                ${
                  isSelected
                    ? "border-black dark:border-white shadow-md dark:shadow-white/10"
                    : "border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30"
                }
              `}
              aria-label={`View image ${i + 1}`}
              aria-pressed={isSelected}
            >
              <img
                src={src}
                alt={`${alt} thumbnail ${i + 1}`}
                className="
                  w-full
                  h-full
                  object-contain
                  bg-white
                  dark:bg-[#1D2128]
                  p-2
                  transition-colors
                  duration-300
                "
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
