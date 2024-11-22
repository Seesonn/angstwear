/*

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
  { id: 1, name: 'Distressed Denim Jacket', category: 'Outerwear', price: 15999, img:p6, description: 'Edgy denim jacket with intentional distressing' },
  { id: 2, name: ' Black Cotton Jeans', category: 'Bottoms', price: 7999, img:p2, description: 'Sleek black jeans and  dusty graded angst ' },
  { id: 3, name: 'Spiked Leather Choker', category: 'Accessories', price: 2499, img:p3 , description: 'Bold leather choker with metal spikes and tond' },
  { id: 4, name: 'Studded Combat Boots', category: 'Footwear', price: 12999, img:p4 , description: 'Heavy-duty boots with silver studs and duty' },
  { id: 5, name: 'Vintage Shirt', category: 'Tops', price: 3999, img:p5 , description: 'Vintage-style t-shirt with punk rock graphics' },
  { id: 6, name: 'Leather Biker Jacket', category: 'Outerwear', price: 24999, img:p1 , description: 'Classic biker jacket in genuine leather and thst' },
  { id: 7, name: 'Sisan Sweetshirt', category: 'Tops', price: 1200, img:p7 , description: 'Made from a blend of breathable cotton and polyester ' },
  { id: 8, name: ' Sisan Sweetshirt', category: 'Tops', price:1200 , img:p8 , description: 'Made from a blend of breathable cotton and polyester ' },
  { id: 9, name: 'Sisan Vest', category: 'Tops', price:1200 , img:p5 , description: 'Made from lightweight, breathable fabric and polyester' },
  { id: 10, name: 'The Mojito ', category: 'Accessories', price:600 , img: p10 , description: 'Red Guitar String Wood Men Wedding Bands ' },
  { id:11 , name: 'Gold Platted Ring', category: 'Accessories', price:100 , img:p11 , description: 'Smooth  gold Platted Ring of German halfaty' }

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
          <h1 className="text-2xl font-bold text-white">SISANWear</h1>
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
              <h2 className="text-4xl font-bold mb-4 text-white">Sisan Redefined:</h2>
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
              At SISANWear, we're passionate about providing edgy, high-quality clothing for the modern rebel. Our curated collection of jackets, tops, bottoms, footwear, and accessories is designed to help you express your inner angst and stand out from the crowd.
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
                    <Mail className="mr-2" /> sisanwear@gmail.com
                  </p>
                  <p className="flex items-center text-gray-700">
                    <Phone className="mr-2" /> 9844354444
                  </p>
                  <p className="flex items-center text-gray-700">
                    <MapPin className="mr-2" />  Salakpur, Morang
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
              <p className="text-sm text-gray-300">Email: sisanwear@gmail.com</p>
              <p className="text-sm text-gray-300">Phone: 9845367677</p>
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
            <p className="text-sm text-gray-400">© 2024 SISANWear. All rights reserved.</p>
          </div>
        </div>
      </footer>

     
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

      {/* Forgot Password Popup *
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
} */






import React, { useState, useEffect } from 'react';
import c1 from "./assets/cl1.jpg";
import c2 from "./assets/cl2.jpg";
import c3 from "./assets/cl3.jpg";
import c4 from "./assets/cl4.jpg";

// PhoneIcon component
const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#23a450" {...props}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z" stroke="#3caa49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </g>
  </svg>
);

// WhatsappIcon component
const WhatsappIcon = (props) => (
  <svg height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000" {...props}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path style={{fill: "#EDEDED"}} d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"></path>
      <path style={{fill: "#55CD6C"}} d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"></path>
      <path style={{fill: "#FEFEFE"}} d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"></path>
    </g>
  </svg>
);

const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const HamburgerIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [c1, c2, c3, c4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Cleaning Service ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

const CleaningService = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isFormOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFormOpen, isMobileMenuOpen]);

  const handleBookNow = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const time = formData.get('time');
    const message = formData.get('message');
    const whatsappMessage = `Name: ${name}, Date: ${date}, Time: ${time}, Message: ${message}`;
    window.open(`https://wa.me/+971566156317?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setIsFormOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+971502331784';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+971566156317', '_blank');
  };

  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <span className="font-bold text-lg">Try It</span>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handlePhoneClick}>
              <PhoneIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm sm:text-base">+971 502 331 784</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleWhatsAppClick}>
              <WhatsappIcon className="w-5 h-5" />
              <span className="text-sm sm:text-base">+971 566 156 317</span>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">About us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Services</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Why us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Gallery</a>
        </nav>
        <button className="md:hidden text-gray-700 absolute top-4 right-4" onClick={toggleMobileMenu}>
          <HamburgerIcon className="w-6 h-6" />
        </button>
      </header>

      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu}>
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">About us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Services</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Why us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Gallery</a>
        </nav>
      </div>

      <main id="home" className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <ImageSlider />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex flex-col items-center text-center">
          <p className="text-lg sm:text-xl font-semibold text-gray-700 leading-relaxed mb-6">
            Our company specializes in providing top-notch cleaning and a variety of other professional services tailored to meet the unique needs of our clients. We are committed to delivering quality, reliability, and customer satisfaction in every service we offer.
          </p>
          <div className="mt-6 px-4 sm:px-6 py-3 bg-green-600 rounded-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Excellence in Every<br />Service, Every Time
            </h1>
          </div>
          <button
            onClick={handleBookNow}
            className="mt-8 px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition-colors"
          >
            BOOK NOW
          </button>
        </div>
      </main>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-xs mx-auto z-10 sm:max-w-sm">
            <div className="flex justify-between items-center p-2 sm:p-4 border-b">
              <h3 className="text-sm sm:text-lg font-medium">Book Now</h3>
              <button onClick={handleCloseForm} className="text-gray-400 hover:text-gray-500">
                <CloseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-2 sm:p-4 space-y-2 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-2xs sm:text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-2xs sm:text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-2xs sm:text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-2xs sm:text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 sm:px-4 py-1 sm:py-2 bg-green-600 text-2xs sm:text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CleaningService;


