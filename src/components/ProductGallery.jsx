import { useMemo, useState } from "react";

export default function ProductGallery({ images = [], alt = "Product" }) {
  const safeImages = useMemo(
    () => (Array.isArray(images) && images.length ? images : ["/images/logo.png"]),
    [images]
  );

  const [selectedImage, setSelectedImage] = useState(safeImages[0]);

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-gray-100">
        <div className="aspect-square rounded-2xl bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden group">
          <img
            src={selectedImage}
            alt={alt}
            className="w-full h-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {safeImages.map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => setSelectedImage(src)}
            className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition flex-shrink-0 bg-white ${
              selectedImage === src ? "border-black" : "border-gray-200"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <img
              src={src}
              alt={`${alt} thumbnail ${i + 1}`}
              className="w-full h-full object-contain bg-white p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
