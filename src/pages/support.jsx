import Head from "next/head";
import Header from "../components/Header";

export default function Support() {
  return (
    <>
      <Head>
        <title>Support | Travence</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Customer Support
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            Need help with orders, warranty, or bulk enquiries?
          </p>

          <div className="mt-12 bg-gray-50 rounded-3xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h2>

            <div className="mt-8 space-y-4 text-lg text-gray-700">
              <p>
                📧 support@travencebags.in
              </p>

              <p>
                📱 +91 8527530306
              </p>

              <p>
                📍 Nangloi, Delhi, India
              </p>
            </div>

            <a
              href="mailto:support@travencebags.in"
              className="mt-8 inline-flex px-8 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
