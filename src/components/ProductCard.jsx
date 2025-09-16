import Link from "next/link";

export default function ProductCard({ product }){
  return (
    <div className="bg-white rounded-xl p-3 shadow-sm">
      <Link href={`/product/${product.slug}`}>
        <a>
          <div className="h-44 w-full overflow-hidden rounded-md">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="mt-3">
            <h3 className="font-medium text-sm">{product.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <div className="text-sm text-gray-700">₹{product.price}</div>
              <div className="text-sm text-yellow-600">★ {product.rating}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
