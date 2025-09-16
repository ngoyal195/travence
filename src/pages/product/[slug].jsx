import Header from "../../components/Header";
import ProductGallery from "../../components/ProductGallery";
import products from "../../lib/products";

export async function getStaticPaths() {
  const paths = products.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => p.slug === params.slug) || null;
  return { props: { product } };
}

export default function ProductPage({ product }) {
  if (!product) {
    return (
      <>
        <Header />
        <main className="max-w-[1200px] mx-auto px-6 py-10">
          <div>Product not found</div>
        </main>
      </>
    );
  }

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
              <strong>Weight:</strong> {product.weight} • <strong>Dimensions:</strong>{" "}
              {product.dims}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
