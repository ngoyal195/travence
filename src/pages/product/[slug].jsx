import Header from "../../components/Header";
import ProductGallery from "../../components/ProductGallery";
import products from "../../lib/products";

export async function getStaticPaths() {

  const paths = products.map((p) => ({
    params: { slug: p.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {

  const product =
    products.find((p) => p.slug === params.slug) || null;

  return {
    props: { product }
  };
}

export default function ProductPage({ product }) {

  if (!product) {
    return <div>Product not found</div>;
  }

  const discount = Math.round(
    ((product.mrp - product.offerPrice) / product.mrp) * 100
  );

  return (

    <>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          <div>

            <ProductGallery images={product.images} />

          </div>

          <div>

            <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
              {discount}% OFF
            </div>

            <h1 className="text-4xl font-black text-gray-900 mt-5">
              {product.name}
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              {product.subtitle}
            </p>

            <div className="mt-6 flex items-center gap-4 flex-wrap">

              <span className="text-5xl font-black text-black">
                ₹{product.offerPrice.toLocaleString()}
              </span>

              <span className="text-2xl line-through text-gray-400">
                ₹{product.mrp.toLocaleString()}
              </span>

            </div>

            <div className="mt-8">

              <h3 className="font-bold text-lg">
                Available Sizes
              </h3>

              <div className="flex gap-3 mt-3 flex-wrap">

                {product.sizes.map((size) => (

                  <div
                    key={size}
                    className="px-5 py-2 rounded-full bg-gray-100 font-medium"
                  >
                    {size}
                  </div>

                ))}

              </div>

            </div>

            <div className="mt-8">

              <h3 className="font-bold text-lg">
                Features
              </h3>

              <div className="flex flex-wrap gap-3 mt-4">

                {product.features.map((feature) => (

                  <div
                    key={feature}
                    className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium"
                  >
                    {feature}
                  </div>

                ))}

              </div>

            </div>

            <div className="mt-8 text-gray-600 leading-8">

              <div>
                <strong>Warranty:</strong> {product.warranty}
              </div>

              <div>
                <strong>Weight:</strong> {product.weight}
              </div>

              <div>
                <strong>Dimensions:</strong> {product.dims}
              </div>

            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <button className="flex-1 bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-bold transition-all">
                Add To Cart
              </button>

              <button className="flex-1 border border-gray-300 hover:bg-gray-100 py-4 rounded-2xl font-semibold transition-all">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </main>

    </>

  );
}
