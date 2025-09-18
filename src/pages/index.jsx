export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold tracking-tight">Travence</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-gray-600 transition">About</a>
          <a href="#services" className="hover:text-gray-600 transition">Services</a>
          <a href="#contact" className="hover:text-gray-600 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight max-w-3xl">
          Travel Smarter. Explore Deeper. <span className="text-blue-600">With Travence</span>.
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Discover a world of adventures, curated experiences, and seamless journeys — all in one place.
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="#services"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Travence. All rights reserved.
      </footer>
    </div>
  );
}
