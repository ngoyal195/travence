export default function ProductGallery({ images = [] }){
  // Simple gallery: primary image + thumbnails
  const main = images[0] || '/images/cabin-lite.jpg';
  return (
    <div>
      <div className="rounded-lg overflow-hidden shadow">
        <img src={main} alt="Product main" className="w-full h-[520px] object-cover" />
      </div>
      <div className="flex gap-3 mt-3">
        {(images.length ? images : [main]).map((src, i) => (
          <div key={i} className="w-20 h-16 overflow-hidden rounded-md border">
            <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
