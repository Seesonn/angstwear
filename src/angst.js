

import React, { useState } from 'react'
import { Menu, X, ShoppingBag, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import c1 from"./assests/c1.png"
import c2 from"./assests/c2.png"
import c3 from"./assests/c3.png"
import c4 from"./assests/c4.png"
import c5 from"./assests/c5.png"
import p1 from"./assests/p1.png"
import p2 from"./assests/p2.png"
import p3 from"./assests/p3.png"
import p4 from"./assests/p4.png"
import p5 from"./assests/p5.png"
import p6 from"./assests/p6.png"
import p7 from"./assests/p7.png"
import p8 from"./assests/p8.png"

import p10 from"./assests/p10.png"
import p11 from"./assests/p11.png"
import home from"./assests/home.png"

const products = [
  { id: 1, name: 'Distressed Denim Jacket', category: 'Outerwear', price: 15999, img:p1, description: 'Edgy denim jacket with intentional distressing' },
  { id: 2, name: ' Black Cotton Jeans', category: 'Bottoms', price: 7999, img:p2, description: 'Sleek black jeans ' },
  { id: 3, name: 'Spiked Leather Choker', category: 'Accessories', price: 2499, img:p3 , description: 'Bold leather choker with metal spikes' },
  { id: 4, name: 'Studded Combat Boots', category: 'Footwear', price: 12999, img:p4 , description: 'Heavy-duty boots with silver studs' },
  { id: 5, name: 'Graphic Band Tee', category: 'Tops', price: 3999, img:p5 , description: 'Vintage-style t-shirt with punk rock graphics' },
  { id: 6, name: 'Leather Biker Jacket', category: 'Outerwear', price: 24999, img:p6 , description: 'Classic biker jacket in genuine leather' },
  { id: 7, name: 'Sisan Sweetshirt', category: 'Tops', price: 1200, img:p7 , description: 'Made from a blend of breathable cotton and polyester ' },
  { id: 8, name: ' Sisan Sweetshirt', category: 'Tops', price:1200 , img:p8 , description: 'Made from a blend of breathable cotton and polyester ' },
  { id: 9, name: 'Sisan Vest', category: 'Tops', price:1200 , img:p5 , description: 'Made from lightweight, breathable fabric' },
  { id: 10, name: 'The Mojito ', category: 'Accessories', price:600 , img: p10 , description: 'Red Guitar String Wood Men Wedding Bands' },
  { id:11 , name: 'Gold Platted Ring', category: 'Tops', price:100 , img:p11 , description: 'Smooth  gold Platted Ring of Germany' }

]

const categories = [
  { name: 'Outerwear', img: c1, description: 'Edgy jackets and coats to make a statement' },
  { name: 'Tops', img: c2, description: 'Rebellious shirts and tops for any occasion' },
  { name: 'Bottoms', img: c3, description: 'Daring pants and skirts to complete your look' },
  { name: 'Footwear', img: c4, description: 'Bold boots and shoes to stomp in style' },
  { name: 'Accessories', img: c5, description: 'Edgy accessories to accent your attitude' }
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }])
  }

  const removeFromCart = (cartId) => {
    const index = cart.findIndex(item => item.cartId === cartId)
    if (index !== -1) {
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    }
  }

  const placeOrder = () => {
    alert('Order placed successfully!')
    setCart([])
    setIsCartOpen(false)
  }

  const openLogin = () => {
    setIsLoginOpen(true)
    setIsSignupOpen(false)
    setIsForgotPasswordOpen(false)
  }

  const openSignup = () => {
    setIsLoginOpen(false)
    setIsSignupOpen(true)
    setIsForgotPasswordOpen(false)
  }

  const openForgotPassword = () => {
    setIsLoginOpen(false)
    setIsSignupOpen(false)
    setIsForgotPasswordOpen(true)
  }

  const closeAllPopups = () => {
    setIsCartOpen(false)
    setIsLoginOpen(false)
    setIsSignupOpen(false)
    setIsForgotPasswordOpen(false)
    setSelectedCategory(null)
  }

  const topSearchProducts = products.slice(0, 4)
  const recommendedProducts = products.slice(2, 6)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-gray-900 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">ANGSTWear</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#shop" className="text-gray-300 hover:text-white transition-colors">Shop</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center">
            <button
              className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors mr-2"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-6 w-6 inline-block mr-2" />
              <span>{cart.length}</span>
            </button>
            <button
              className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors mr-2"
              onClick={openLogin}
            >
              Login
            </button>
            <button
              className="md:hidden text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-800 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors text-left">Home</a>
                <a href="#shop" className="block w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors text-left">Shop</a>
                <a href="#about" className="block w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors text-left">About</a>
                <a href="#contact" className="block w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors text-left">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div id="home" className="relative mb-12">
            <img
              src={home}
              alt="Angst Redefined"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-4xl font-bold mb-4 text-white">Angst Redefined:</h2>
              <p className="text-xl mb-4 text-gray-200">Shop Fashion that Screams Rebellion, Number 1 in Attitude</p>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">Shop now</button>
            </div>
          </div>

          <section id="shop" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Categories</h2>
            {categories.map((category, index) => (
              <div key={category.name} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img src={category.img} alt={category.name} className="w-full h-64 object-cover rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category.name}</h3>
                  <p className="mb-4 text-gray-600">{category.description}</p>
                  <button
                    className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    Shop {category.name}
                  </button>
                </div>
              </div>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Top Search Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topSearchProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-sm mb-2 text-gray-600">{product.description}</p>
                    <p className="font-bold mb-2 text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
                    <button
                      className="w-full bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Highly Recommended</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-sm mb-2 text-gray-600">{product.description}</p>
                    <p className="font-bold mb-2 text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
                    <button
                      className="w-full bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="mb-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">About Us</h2>
            <p className="mb-4 text-gray-700">
              At ANGSTWear, we're passionate about providing edgy, high-quality clothing for the modern rebel. Our curated collection of jackets, tops, bottoms, footwear, and accessories is designed to help you express your inner angst and stand out from the crowd.
            </p>
            <p className="text-gray-700">
              With years of experience in alternative fashion, our team of experts carefully selects each item in our inventory to ensure that we're offering the latest underground trends and timeless punk classics that will fuel your rebellion for years to come.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why Choose Us</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Curated selection of high-quality alternative fashion</li>
              <li>Expert style advice for the perfect rebellious look</li>
              <li>Competitive prices on top underground brands</li>
              <li>Easy returns and exchanges</li>
              <li>Fast and reliable shipping</li>
              <li>Regular promotions an discounts for our loyal misfits</li>
            </ul>
          </section>

          <section id="contact" className="mb-12  rounded-lg shadow-md p-6">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700">
                    <Mail className="mr-2" /> info@angstwear.com
                  </p>
                  <p className="flex items-center text-gray-700">
                    <Phone className="mr-2" /> (123) 456-7890
                  </p>
                  <p className="flex items-center text-gray-700">
                    <MapPin className="mr-2" /> 666 Rebellion Road, Punkville, 54321
                  </p>
                </div>
                <form className="space-y-4">
                  <input type="text" placeholder="Name" className="w-full p-2 rounded-md border border-gray-300" />
                  <input type="email" placeholder="Email" className="w-full p-2 rounded-md border border-gray-300" />
                  <textarea placeholder="Message" rows={4} className="w-full p-2 rounded-md border border-gray-300"></textarea>
                  <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 mt-12 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-300">We provide high-quality alternative fashion for all your rebellious needs.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-300">Email: info@angstwear.com</p>
              <p className="text-sm text-gray-300">Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2024 ANGSTWear. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Category Products Popup */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-gray-900 p-6 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedCategory} Products</h2>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === selectedCategory).map((product) => (
                  <div key={product.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                      <p className="text-sm mb-2 text-gray-600">{product.description}</p>
                      <p className="font-bold mb-2 text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
                      <button
                        className="w-full bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Popup */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={closeAllPopups}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-gray-900 p-6 rounded-lg max-w-md w-full max-h-[80vh] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="overflow-y-auto flex-grow mb-4">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                      onClick={() => removeFromCart(item.cartId)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold mb-4 text-gray-900">Total: ₹{cart.reduce((sum, item) => sum + item.price, 0).toLocaleString('en-IN')}</p>
                <button
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors mb-2"
                  onClick={placeOrder}
                >
                  Place Order
                </button>
                <button
                  className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                  onClick={() => setIsCartOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Popup */}
      <AnimatePresence>
        {isLoginOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={closeAllPopups}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-gray-900 p-6 rounded-lg max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Login</h2>
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring focus:ring-gray-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring focus:ring-gray-200 focus:ring-opacity-50" />
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">Login</button>
              </form>
              <div className="mt-4 text-center">
                <button onClick={openForgotPassword} className="text-gray-600 hover:text-gray-900 transition-colors">Forgot password?</button>
              </div>
              <div className="mt-4 text-center">
                <p>Don't have an account? <button onClick={openSignup} className="text-gray-600 hover:text-gray-900 transition-colors">Sign up</button></p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signup Popup */}
      <AnimatePresence>
        {isSignupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={closeAllPopups}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-gray-900 p-6 rounded-lg max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Sign Up</h2>
                <button
                  onClick={() => setIsSignupOpen(false)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring focus:ring-gray-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring focus:ring-gray-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring focus:ring-gray-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input type="text" id="address" name="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring focus:ring-gray-200 focus:ring-opacity-50" />
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">Sign Up</button>
              </form>
              <div className="mt-4 text-center">
                <p>Already have an account? <button onClick={openLogin} className="text-gray-600 hover:text-gray-900 transition-colors">Login</button></p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Forgot Password Popup */}
      <AnimatePresence>
        {isForgotPasswordOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center  justify-center"
            onClick={closeAllPopups}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-gray-900 p-6 rounded-lg max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Forgot Password</h2>
                <button
                  onClick={() => setIsForgotPasswordOpen(false)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring focus:ring-gray-200 focus:ring-opacity-50" />
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">Reset Password</button>
              </form>
              <div className="mt-4 text-center">
                <button onClick={openLogin} className="text-gray-600 hover:text-gray-900 transition-colors">Back to Login</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}