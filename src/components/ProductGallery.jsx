import { useState } from "react";

export default function ProductGallery({ images = [] }) {

  const [selectedImage, setSelectedImage] = useState(
    images[0]
  );

  return (

    <div>

      <div className="bg-white rounded-3xl p-8 shadow-xl">

        <div className="aspect-square flex items-center justify-center overflow-hidden">

          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-full object-contain"
          />

        </div>

      </div>

      <div className="flex gap-3 mt-5 overflow-x-auto pb-2">

        {images.map((src, i) => (

          <button
            key={i}
            onClick={() => setSelectedImage(src)}
            className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition flex-shrink-0 ${
              selectedImage === src
                ? "border-black"
                : "border-gray-200"
            }`}
          >

            <img
              src={src}
              alt={`thumb-${i}`}
              className="w-full h-full object-contain bg-white"
            />

          </button>

        ))}

      </div>

    </div>

  );
}
