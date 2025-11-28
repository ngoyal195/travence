import Head from "next/head";
import { useState } from "react";

// Icons for the pill-shaped feature tags
const CheckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
      clipRule="evenodd"
    />
  </svg>
);

// Updated the product data to include multiple images per product
const products = [
  {
    name: "Travence Anti Theft CM (S|M|L)",
    imgs: ["images/bag1.png", "images/bag1-view2.png", "images/bag1-view3.png", "images/bag1-view4.png", "images/bag1-view5.png"],
    tag: "Carry-on Friendly"
  },
  {
    name: "Travence City Y (S|M|L)",
    imgs: ["images/bag2.png", "images/bag2-view2.png", "images/bag2-view3.png", "images/bag2-view4.png", "images/bag2-view5.png", "images/bag2-view6.png", "images/bag2-view7.png"],
    tag: "Expandable Capacity"
  },
  {
    name: "Travence Set of 3 (S+M+L)",
    imgs: ["images/bag3.png", "images/bag3-view2.png", "images/bag3-view3.png"],
    tag: "Laptop Compartment"
  },
];

// Modal Component for full-screen image view
const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative max-w-5xl max-h-[95vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-700 hover:bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center transition z-10"
          aria-label="Close image viewer"
        >
          &times;
        </button>
        <img
          src={images[currentIndex]}
          alt="Full screen product view"
          className="max-w-full max-h-[90vh] object-contain mx-auto transition-opacity duration-300"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full text-2xl transition z-10"
              aria-label="Previous image"
            >
              &lt;
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full text-2xl transition z-10"
              aria-label="Next image"
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
};


const ProductCard = ({ product, onImageClick }) => {
  const [currentCardImageIndex, setCurrentCardImageIndex] = useState(0);

  const nextCardImage = (e) => {
    e.stopPropagation(); 
    setCurrentCardImageIndex((prevIndex) => (prevIndex + 1) % product.imgs.length);
  };

  const prevCardImage = (e) => {
    e.stopPropagation(); 
    setCurrentCardImageIndex((prevIndex) => (prevIndex - 1 + product.imgs.length) % product.imgs.length);
  };

  return (
    // Updated hover effect: pronounced shadow and slight scale
    <article className="bg-white border border-gray-100 rounded-2xl p-4 transition duration-300 transform hover:shadow-2xl hover:scale-[1.02] relative group">
      <div
        className="w-full h-72 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center relative cursor-pointer"
        onClick={() => onImageClick(product.imgs, currentCardImageIndex)} 
      >
        <img
          src={product.imgs[currentCardImageIndex]}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-opacity duration-300"
        />
        {/* Navigation buttons for the card - only show on hover */}
        {product.imgs.length > 1 && (
          <>
            <button
              onClick={prevCardImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition opacity-0 group-hover:opacity-100 duration-300"
              aria-label="Previous image"
            >
              &lt;
            </button>
            <button
              onClick={nextCardImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition opacity-0 group-hover:opacity-100 duration-300"
              aria-label="Next image"
            >
              &gt;
            </button>
            {/* Image Indicator Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1">
              {product.imgs.map((_, index) => (
                <span
                  key={index}
                  className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentCardImageIndex ? 'bg-black w-4' : 'bg-gray-400'
                  }`}
                  aria-label={`View image ${index + 1}`}
                ></span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Info */}
      <h3 className="mt-4 font-bold text-xl text-gray-900 leading-snug">{product.name}</h3>
      
      {/* Pill-shaped tag style */}
      <div className="inline-flex items-center mt-2 px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
        <CheckIcon className="mr-1" />
        {product.tag}
      </div>

      {/* Button with new accent color */}
      <button
        onClick={() => onImageClick(product.imgs, currentCardImageIndex)}
        className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-black text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
      >
        View Details & Full Screen
      </button>
    </article>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);

  const openModal = (images, initialIndex = 0) => {
    setModalImages(images);
    setCurrentModalImageIndex(initialIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setCurrentModalImageIndex(0);
  };

  const nextModalImage = () => {
    setCurrentModalImageIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
  };

  const prevModalImage = () => {
    setCurrentModalImageIndex((prevIndex) => (prevIndex - 1 + modalImages.length) % modalImages.length);
  };

  return (
    // Applied new body font (Inter)
    <div className="font-['Inter',_sans-serif]">
      <Head>
        <title>Travence™ | Premium Travel Luggage</title>
        <meta
          name="description"
          content="Travence manufactures and trades premium luggage bags including backpacks, duffels, trolleys, and more."
        />
        <link rel="icon" href="images/logo.png" />
        {/* Added Google Font link for Inter (Body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="images/logo.png" alt="Travence" className="h-9 w-9" />
            <h1 className="text-3xl font-extrabold text-gray-900 font-['Oswald'] uppercase tracking-widest">
              Travence<span className="text-lg font-normal align-top text-gray-500">™</span>
            </h1>
          </a>

          <nav className="hidden md:flex gap-10 items-center text-gray-600 font-medium">
            <a href="#products" className="hover:text-black transition">Collection</a>
            <a href="#about" className="hover:text-black transition">Our Story</a>
            <a href="#contact" className="hover:text-black transition">Support</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - More impactful design */}
      <section className="bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 lg:py-32">
          {/* Left: copy */}
          <div className="max-w-xl lg:order-1">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-4">The Next Level of Travel Gear</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Luggage Designed <br /> for Modern Journeys
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Handcrafted, robust, and smart travel gear built with a promise of comfort and durability.
            </p>

            <div className="mt-10 flex items-center gap-4">
              {/* Primary CTA with new accent color/style */}
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-xl hover:bg-gray-800 transition transform hover:-translate-y-0.5"
              >
                View Collection
              </a>

              {/* Secondary CTA is a ghost button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-400 text-gray-900 text-lg font-medium rounded-lg hover:bg-gray-100 transition"
              >
                Contact Us
              </a>
            </div>

            {/* small features - improved style */}
            <div className="mt-12 flex flex-wrap gap-3 text-sm">
              <div className="bg-white px-4 py-2 rounded-full shadow-md text-gray-700 font-medium border border-gray-100">Lightweight Frames</div>
              <div className="bg-white px-4 py-2 rounded-full shadow-md text-gray-700 font-medium border border-gray-100">360° Spinner Wheels</div>
            </div>
          </div>

          {/* Right: hero image card - better positioning */}
          <div className="flex justify-center lg:justify-end lg:order-2">
            <div className="bg-white rounded-3xl p-12 w-full max-w-lg shadow-2xl relative">
              <img src="images/hero-bag.png" alt="Travence bag" className="max-h-[30rem] w-full object-contain" />
              {/* Subtle background element for visual interest */}
              <div className="absolute inset-0 -z-10 bg-blue-50 rounded-3xl transform rotate-3 scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Explore Our Collection</h2>
            <a href="#products" className="text-lg text-blue-600 font-medium hover:text-blue-800 transition mt-2 sm:mt-0">View All Luggage &rarr;</a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} onImageClick={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider/Callout */}
      <div className="bg-black py-16 text-center text-white">
        <p className="text-3xl font-light tracking-wide max-w-4xl mx-auto px-6">"Style in Motion: Engineered for Durability, Designed for Life."</p>
      </div>

      {/* Testimonials - Refined look */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Travelers Worldwide</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <blockquote className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-black text-left">
              <p className="text-xl text-gray-700 italic leading-relaxed">“Bought the Cabin Lite and it’s been perfect for short business trips — light, sturdy, and the wheels are incredibly smooth. A truly premium feel.”</p>
              <footer className="mt-6 text-base font-semibold text-gray-800">— Rahul K., Frequent Traveller</footer>
            </blockquote>
            <blockquote className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-black text-left">
              <p className="text-xl text-gray-700 italic leading-relaxed">“Excellent wheels, great build quality, and stylish design. I've travelled across continents with my Travence bag and it still looks brand new. Highly recommend.”</p>
              <footer className="mt-6 text-base font-semibold text-gray-800">— Priya S., Travel Blogger</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <img src="images/about-image.png" alt="Travence crafting process" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="lg:order-1 max-w-xl">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-4">Our Commitment</p>
            <h2 className="text-4xl font-bold text-gray-900">Handcrafting Your Next Adventure</h2>
            <p className="mt-6 text-lg text-gray-700">
              At **Travence**, we believe that every journey tells a story. We handcraft premium luggage bags with a relentless focus on durability, comfort, and **timeless style**. Our products are designed for the modern traveler, built to withstand the rigors of the road and the airport.
            </p>
            <p className="mt-4 text-lg text-gray-700 font-medium">
              We stand by our quality, offering extended warranties on all our luggage and a commitment to customer satisfaction that lasts a lifetime.
            </p>
            <a href="#products" className="mt-6 inline-flex text-lg font-medium text-blue-600 hover:text-blue-800 transition">
              See Our Quality &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter / Leads - Modernized style */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center border-2 border-dashed border-gray-300 p-8 rounded-2xl">
          <h4 className="text-3xl font-extrabold text-gray-900">Stay in the Loop on New Arrivals</h4>
          <p className="mt-3 text-lg text-gray-600">Be the first to know about new product launches, exclusive offers, and travel tips.</p>

          <form className="mt-8 flex max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your best email address"
              aria-label="Email"
              className="flex-1 px-5 py-3 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            {/* CTA with accent color */}
            <button className="px-6 py-3 bg-black text-white text-lg font-medium rounded-r-lg hover:bg-gray-800 transition">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-bold">Need assistance? Get in touch with our team.</h3>
          <p className="mt-4 text-lg text-blue-200">For retail orders, bulk enquiries, or support, we're here to help.</p>
          
          <div className="mt-8 flex justify-center gap-4">
            {/* Primary contact method styled boldly */}
            <a 
              href="mailto:support@travencebags.in" 
              className="px-8 py-3 bg-white text-blue-800 font-bold rounded-full text-lg shadow-lg hover:bg-gray-100 transition"
            >
              Email Our Support
            </a>
            <a 
              href="https://wa.me/+918527530306" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 border border-white text-white rounded-full text-lg hover:bg-white hover:text-blue-800 transition"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-blue-300">Email: <a className="underline" href="mailto:support@travencebags.in">support@travencebags.in</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img src="images/logo.png" alt="Travence" className="h-10 mb-4" />
            <p className="text-sm text-gray-400 max-w-sm">Travence™ — Style in Motion. Manufacturer & trader of quality luggage and travel gear for modern adventurers.</p>
          </div>

          <div className="text-sm">
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="hover:text-white transition">Full Collection</a></li>
              <li><a href="#about" className="hover:text-white transition">Our Story</a></li>
              <li><a href="#contact" className="hover:text-white transition">Customer Support</a></li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex items-center gap-4 text-lg">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                {/* Instagram Icon Placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                {/* Facebook Icon Placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                {/* LinkedIn Icon Placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 text-sm text-center py-6 text-gray-500">
          © {new Date().getFullYear()} Travence™. All rights reserved. | Crafted for the road and airport.
        </div>
      </footer>

      {/* Image Modal */}
      {isModalOpen && (
        <ImageModal
          images={modalImages}
          currentIndex={currentModalImageIndex}
          onClose={closeModal}
          onNext={nextModalImage}
          onPrev={prevModalImage}
        />
      )}
    </div>
  );
}
