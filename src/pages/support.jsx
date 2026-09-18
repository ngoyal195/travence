import Head from "next/head";
import Header from "../components/Header";

export default function Support() {
  return (
    <>
      <Head>
        <title>Support | Travence</title>
      </Head>

      <Header />

      <main
        className="
          min-h-screen
          bg-white
          dark:bg-[#0B0D10]
          py-20
          px-6
          transition-colors
          duration-500
        "
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1
            className="
              text-5xl
              font-extrabold
              text-gray-900
              dark:text-white
              transition-colors
              duration-500
            "
          >
            Customer Support
          </h1>

          <p
            className="
              mt-6
              text-xl
              text-gray-600
              dark:text-gray-400
              transition-colors
              duration-500
            "
          >
            Need help with orders, warranty, or bulk enquiries?
          </p>

          {/* Contact Card */}
          <div
            className="
              mt-12
              bg-gray-50
              dark:bg-[#15181D]
              border
              border-transparent
              dark:border-white/10
              rounded-3xl
              p-10
              shadow-lg
              dark:shadow-black/30
              transition-all
              duration-500
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                text-gray-900
                dark:text-white
                transition-colors
                duration-500
              "
            >
              Contact Information
            </h2>

            <div
              className="
                mt-8
                space-y-4
                text-lg
                text-gray-700
                dark:text-gray-300
                transition-colors
                duration-500
              "
            >
              <p>📧 support@travencebags.in</p>

              <p>📱 +91 8527530306</p>

              <p>📍 Nangloi, Delhi, India</p>
            </div>

            <a
              href="mailto:support@travencebags.in"
              className="
                mt-8
                inline-flex
                px-8
                py-3
                bg-black
                dark:bg-white
                text-white
                dark:text-black
                rounded-xl
                font-semibold
                hover:bg-gray-800
                dark:hover:bg-gray-200
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
