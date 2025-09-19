import Head from "next/head";

import { useState } from "react";



// Updated the product data to include multiple images per product

const products = [

  { 

    name: "Cabin Lite", 

    imgs: ["images/bag1.png", "images/bag1-view2.png", "images/bag1-view3.png", "images/bag1-view4.png", "images/bag1-view5.png"], 

    tag: "Carry-on friendly" 

  },

  { 

    name: "Expander 24", 

    imgs: ["images/bag2.png", "images/bag2-view2.png", "images/bag2-view3.png"], 

    tag: "Expandable capacity" 

  },

  { 

    name: "Business Roller", 

    imgs: ["images/bag3.png", "images/bag3-view2.png", "images/bag3-view3.png"], 

    tag: "Laptop compartment" 

  },

];



// Modal Component for full-screen image view

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {

  if (!images || images.length === 0) return null;



  return (

    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">

      <div className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">

        <button 

          onClick={onClose} 

          className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-700 hover:bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center transition"

          aria-label="Close image viewer"

        >

          &times;

        </button>

        <img 

          src={images[currentIndex]} 

          alt="Full screen product view" 

          className="max-w-full max-h-[80vh] object-contain mx-auto" 

        />

        {images.length > 1 && (

          <>

            <button 

              onClick={onPrev} 

              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full text-2xl transition"

              aria-label="Previous image"

            >

              &lt;

            </button>

            <button 

              onClick={onNext} 

              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full text-2xl transition"

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

    e.stopPropagation(); // Prevent modal from opening when navigating carousel

    setCurrentCardImageIndex((prevIndex) => (prevIndex + 1) % product.imgs.length);

  };



  const prevCardImage = (e) => {

    e.stopPropagation(); // Prevent modal from opening when navigating carousel

    setCurrentCardImageIndex((prevIndex) => (prevIndex - 1 + product.imgs.length) % product.imgs.length);

  };



  return (

    <article className="bg-white border rounded-2xl p-4 hover:shadow-lg transition transform hover:-translate-y-1 relative group">

      <div 

        className="w-full h-72 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative cursor-pointer"

        onClick={() => onImageClick(product.imgs, currentCardImageIndex)} // Open modal on image click

      >

        <img 

          src={product.imgs[currentCardImageIndex]} 

          alt={product.name} 

          className="w-full h-full object-contain transition-opacity duration-300 p-2" // Changed to object-contain and added padding

        />

        {/* Navigation buttons for the card - only show on hover */}

        {product.imgs.length > 1 && (

          <>

            <button 

              onClick={prevCardImage} 

              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition opacity-0 group-hover:opacity-100"

              aria-label="Previous image"

            >

              &lt;

            </button>

            <button 

              onClick={nextCardImage} 

              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition opacity-0 group-hover:opacity-100"

              aria-label="Next image"

            >

              &gt;

            </button>

          </>

        )}

      </div>

      <h3 className="mt-4 font-semibold text-lg text-gray-900">{product.name}</h3>

      <p className="text-sm text-gray-500 mt-2">{product.tag}</p>

      {/* Optional: Add a "View Full Screen" button on the card */}

      <button 

        onClick={() => onImageClick(product.imgs, currentCardImageIndex)}

        className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

      >

        View Full Screen

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

    <>

      <Head>

        <title>Travence™</title>

        <meta

          name="description"

          content="Travence manufactures and trades premium luggage bags including backpacks, duffels, trolleys, and more."

        />

        <link rel="icon" href="images/logo.png" />

        {/* Added the Google Font link for Oswald */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />

      </Head>



      {/* Header */}

      <header className="bg-white">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Updated brand logo to include "Travence" and TM symbol */}

          <a href="/" className="flex items-center gap-3">

            <img src="images/logo.png" alt="Travence" className="h-10" />

            {/* Updated the font to Oswald and made it uppercase */}

            <h1 className="text-3xl font-extrabold text-gray-900 font-['Oswald'] uppercase">

              Travence<span className="text-lg font-normal align-top">™</span>

            </h1>

          </a>



          <nav className="hidden md:flex gap-8 items-center text-gray-700">

            <a href="#products" className="hover:text-gray-900">Products</a>

            <a href="#about" className="hover:text-gray-900">About</a>

            <a href="#contact" className="hover:text-gray-900">Contact</a>

          </nav>

        </div>

      </header>



      {/* Hero */}

      <section className="hero bg-white">

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}

          <div className="max-w-xl">

            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Comfort • Durable • Travel-ready</p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">

              Premium Luggage <br /> for Every Journey

            </h1>

            <p className="mt-6 text-lg text-gray-600">

              Stylish, robust trolley bags and backpacks built to last — handcrafted for the road and airport.

            </p>



            <div className="mt-8 flex items-center gap-4">

              <a

                href="#products"

                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full font-medium shadow-sm hover:shadow-md transition"

              >

                View Collection

              </a>



              <a

                href="#contact"

                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 rounded-full font-medium hover:bg-gray-100 transition"

              >

                Contact Us

              </a>

            </div>



            {/* small features */}

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">

              <div className="bg-white px-3 py-2 rounded-full shadow-sm">Lightweight frames</div>

              <div className="bg-white px-3 py-2 rounded-full shadow-sm">360° spinner wheels</div>

            </div>

          </div>



          {/* Right: big logo / hero image card */}

          <div className="flex justify-center md:justify-end">

            <div className="bg-white rounded-2xl p-18 w-full max-w-md flex items-center justify-center">

              <img src="images/hero-bag.png" alt="Travence bag" className="max-h-100 object-contain" />

            </div>

          </div>

        </div>

      </section>



      {/* Featured Products */}

      <section id="products" className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore Our Collection</h2>

            <a href="#products" className="text-sm text-gray-600 hover:text-gray-900">See all</a>

          </div>



          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">

            {products.map((product) => (

              <ProductCard key={product.name} product={product} onImageClick={openModal} />

            ))}

          </div>

        </div>

      </section>



      {/* Testimonials */}

      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-2xl font-bold text-gray-900">What customers say</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <blockquote className="bg-white p-6 rounded-xl shadow-sm text-left">

              <p className="text-gray-700">“Bought the Cabin Lite and it’s been perfect for short business trips — light and sturdy.”</p>

              <footer className="mt-4 text-sm text-gray-500">— Rahul, Frequent Traveller</footer>

            </blockquote>

            <blockquote className="bg-white p-6 rounded-xl shadow-sm text-left">

              <p className="text-gray-700">“Excellent wheels, smooth rolling and great build quality. Highly recommend Travence.”</p>

              <footer className="mt-4 text-sm text-gray-500">— Priya, Travel Blogger</footer>

            </blockquote>

          </div>

        </div>

      </section>



      {/* Added About section with some placeholder text */}

      <section id="about" className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">About Our Brand</h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 text-center">

            At Travence, we believe that every journey tells a story. We handcraft premium luggage bags with a focus on durability, comfort, and timeless style. Our products are designed for the modern traveler, built to withstand the rigors of the road while making a statement. We stand by our quality, offering lifetime warranties on our wheels and a commitment to customer satisfaction.

          </p>

        </div>

      </section>



      {/* Newsletter / Leads */}

      <section className="py-12 bg-white">

        <div className="max-w-3xl mx-auto px-6 text-center">

          <h4 className="text-xl font-semibold text-gray-900">Stay in the loop</h4>

          <p className="mt-2 text-gray-600">Get new product launches and wholesale offers in your inbox.</p>



          <form className="mt-6 flex max-w-xl mx-auto gap-2">

            <input

              type="email"

              placeholder="Enter your email"

              aria-label="Email"

              className="flex-1 px-4 py-3 border rounded-l-lg border-gray-200 focus:outline-none"

            />

            <button className="px-6 py-3 bg-black text-white rounded-r-lg font-medium">Subscribe</button>

          </form>

        </div>

      </section>



      {/* Contact */}

      <section id="contact" className="py-16 bg-black text-white text-center">

        <div className="max-w-3xl mx-auto px-6">

          <h3 className="text-2xl font-bold">Get in touch — bulk & retail enquiries</h3>

          <p className="mt-3 text-gray-300">Email us at <a className="underline" href="mailto:hellotravence@gmail.com">hellotravence@gmail.com</a> or message on WhatsApp.</p>

          <div className="mt-6">

            <a href="mailto:hellotravence@gmail.com" className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium mr-3">Email Us</a>

            <a href="https://wa.me/+918527530306" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white rounded-full">WhatsApp</a>

          </div>

        </div>

      </section>



      {/* Footer */}

      <footer className="bg-black text-gray-300">

        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>

            <img src="images/logo.png" alt="Travence" className="h-10 mb-4" />

            <p className="text-sm text-gray-400 max-w-sm">Travence™ — Style in Motion. Manufacturer & trader of quality luggage and travel gear.</p>

          </div>



          <div className="text-sm">

            <h4 className="font-semibold text-gray-200 mb-3">Quick links</h4>

            <ul className="space-y-2">

              <li><a href="#products" className="hover:text-white">Products</a></li>

              <li><a href="#about" className="hover:text-white">About</a></li>

              <li><a href="#contact" className="hover:text-white">Contact</a></li>

            </ul>

          </div>



          <div>

            <h4 className="font-semibold text-gray-200 mb-3">Follow</h4>

            <div className="flex items-center gap-3">

              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>

              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>

              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>

            </div>

          </div>

        </div>



        <div className="border-t border-gray-800 text-sm text-center py-4">

          © {new Date().getFullYear()} Travence™. All rights reserved.

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

    </>

  );

}
