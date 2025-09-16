import { useRouter } from 'next/router';
import Header from "../../components/Header";
import ProductGallery from "../../components/ProductGallery";
import products from "../../lib/products";

export default function ProductPage(){
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find(p => p.slug === slug) || products[0];

  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="md:flex gap-8">
          <div className="md:w-7/12">
            <ProductGallery images={[product.image]} />
          </div>

          <div className="md:w-5/12">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="mt-2 text-xl">₹{product.price}</div>

            <div className="mt-4">
              <button className="btn-primary w-full">Add to cart</button>
              <button className="w-full mt-3 py-3 rounded-lg border">Buy now</button>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Weight:</strong> {product.weight} • <strong>Dimensions:</strong> {product.dims}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
