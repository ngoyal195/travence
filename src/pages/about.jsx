import Head from "next/head";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Travence™</title>
      </Head>

      <Header />

      <main
        className="
          min-h-screen
          bg-gray-50
          dark:bg-[#0B0D10]
          py-20
          px-6
          transition-colors
          duration-500
        "
      >
        <div className="max-w-5xl mx-auto">

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
            About Travence
          </h1>

          {/* Main Description */}
          <p
            className="
              mt-8
              text-xl
              leading-relaxed
              text-gray-700
              dark:text-gray-300
              transition-colors
              duration-500
            "
          >
            Travence™ manufactures premium luggage and travel gear designed
            for modern explorers. We focus on durability, elegant design,
            lightweight construction, and practical travel innovation.
          </p>

          {/* Secondary Description */}
          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-gray-600
              dark:text-gray-400
              transition-colors
              duration-500
            "
          >
            From smooth spinner wheels to anti-theft locking systems,
            every detail is crafted to elevate your travel experience.
          </p>

          {/* Image */}
          <div className="mt-14">
            <img
              src="/images/about.png"
              alt="Travence"
              className="
                rounded-3xl
                shadow-2xl
                dark:shadow-black/50
                transition-all
                duration-500
              "
            />
          </div>

        </div>
      </main>
    </>
  );
}
