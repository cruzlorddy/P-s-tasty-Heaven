import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Phone, Star, ChefHat } from 'lucide-react'

export default function PsTastyHeaven() {
  const [selectedItem, setSelectedItem] = useState(null)
  const whatsappPrimary = '2349150375459'
  const whatsappAlt = '2349155542934'

  const menuItems = {
    snacks: [
      { id: 'meat-pie', name: 'Meat Pie', price: '₦1,000' },
      { id: 'cake-slice', name: 'Cake Slice', price: '₦1,500' },
      { id: 'cupcakes', name: 'Cupcakes', price: '₦500' },
      { id: 'fish-roll', name: 'Fish Roll', price: '₦800' },
      { id: 'chin-chin', name: 'Chin Chin', price: '₦1,000' },
      { id: 'shawarma', name: 'Shawarma', price: '₦5,500' },
      { id: 'cookies', name: 'Coconut Cookies', price: '₦1,500' },
      { id: 'cookies', name: 'Plain Cookies', price: '₦1,000' },
      { id: 'cookies', name: 'Chocolate Chip Cookies', price: '₦2,000' },
      // 
    ],
    food: [
      { id: 'jollof-rice', name: 'Jollof Rice', price: '₦3,000' },
      { id: 'fried-rice', name: 'Fried Rice', price: '₦3,000' },
      { id: 'asun-rice', name: 'Asun Rice', price: '₦3,000' },
      { id: 'egusi-soup', name: 'Egusi Soup', price: '₦3,000' },
      { id: 'okro-soup', name: 'Okro soup', price: '₦3,000' },
      { id: 'banga-soup', name: 'Banga soup', price: '₦3,000' },
      { id: 'melon-soup', name: 'Melon pepper Soup', price: '₦3,000' },
      { id: 'banga-soup', name: 'Vegetable Soup', price: '₦3,000' },
      { id: 'fried-noodle', name: 'Fried Noodles', price: '₦2,500' },
      { id: 'african-delicacies', name: 'Other African Delicacies', price: 'Contact' },
    ],
    
    proteins: [
      { id: 'turkey', name: 'Turkey', price: '₦5,000' },
      { id: 'chicken', name: 'Chicken', price: '₦4,000' },
      { id: 'eggs', name: 'Eggs', price: '₦500' },
      { id: 'beef', name: 'Beef', price: '₦1,000' },
      { id: 'croaker-fish', name: 'Croaker Fish', price: '₦3,000' },
    ],
  }
  const galleryItems = [
  { id: 1, name: 'Meat Pie', image: '/gallery/meatpie.jpg' },
  { id: 2, name: 'Spaghetti', image: '/gallery/spaghetti.jpg' },
  { id: 3, name: 'Shawarma Wrap', image: '/gallery/shawarma.jpg' },
  { id: 4, name: 'Plain Cookies', image: '/gallery/plaincookies.jpg' },
  { id: 5, name: 'Cupcakes', image: '/gallery/cupcakes.jpg' },
  { id: 6, name: 'Foli Cake', image: '/gallery/folicake.jpg' },
  { id: 7, name: 'Chocolate Chip Cookies', image: '/gallery/chocolatechipcookies.jpg' },

  // Add more items as needed
]

  const handleItemClick = (item) => {
    const message = `Hi P's Tasty Heaven! I want to order ${item.name}. Can you provide more details?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappPrimary}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white antialiased">
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/shawarma.jpg')",
            filter: 'brightness(0.4) blur(2px)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl text-center px-6 py-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6"
          >
            {/* <ChefHat className="w-16 h-16 mx-auto mb-4 text-red-500" strokeWidth={1.5} /> */}
              <img src="/herlogo.jpg" className='mx-auto mb-4 w-16 h-16' alt="Logo" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, #FCEBE5 0%, #FFA07A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(252, 235, 229, 0.3)'
            }}
          >
            P's Tasty Heaven
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Where every bite feels like love
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-2 items-center justify-center mb-10 text-yellow-400"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400" />
            ))}
            <span className="ml-2 text-gray-300 text-sm">Rated 5.0 by our customers</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <a
              href={`https://wa.me/${whatsappPrimary}?text=${encodeURIComponent("Hi P's Tasty Heaven! I want to place an order")}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/50"
              style={{ background: 'linear-gradient(135deg, #c50c2b 0%, #ff1744 100%)' }}
            >
              <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Order on WhatsApp
            </a>

            <a
              href={`tel:+${whatsappPrimary}`}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-base font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-4 items-center justify-center text-sm text-gray-400"
          >
            <span className="px-4 py-2 bg-white/5 backdrop-blur rounded-full border border-white/10">Snacks</span>
            <span className="px-4 py-2 bg-white/5 backdrop-blur rounded-full border border-white/10">African Delicacies</span>
            <span className="px-4 py-2 bg-white/5 backdrop-blur rounded-full border border-white/10">Premium Proteins</span>
          </motion.div>
        </motion.div>
      </header>

      <main className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-slate-950 to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FCEBE5' }}>
            Our Menu
          </h2>
          <p className="text-gray-400 text-lg">Click on any item to order via WhatsApp</p>
        </motion.div>

        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.article
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl backdrop-blur-sm border border-red-500/20"
            style={{ background: 'linear-gradient(135deg, rgba(197,12,43,0.1), rgba(0,0,0,0.4))' }}
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#FCEBE5' }}>
              <span className="text-3xl">🥐</span> Snacks
            </h3>
            <ul className="space-y-3">
              {menuItems.snacks.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group cursor-pointer p-3 rounded-xl bg-white/5 hover:bg-red-500/20 transition-all duration-300 border border-transparent hover:border-red-500/50"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 group-hover:text-white font-medium">{item.name}</span>
                    <span className="text-red-400 font-semibold">{item.price}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-3xl backdrop-blur-sm border border-orange-500/20"
            style={{ background: 'linear-gradient(135deg, rgba(255,165,0,0.08), rgba(0,0,0,0.4))' }}
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#FCEBE5' }}>
              <span className="text-3xl">🍛</span> Food
            </h3>
            <ul className="space-y-3">
              {menuItems.food.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group cursor-pointer p-3 rounded-xl bg-white/5 hover:bg-orange-500/20 transition-all duration-300 border border-transparent hover:border-orange-500/50"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 group-hover:text-white font-medium">{item.name}</span>
                    <span className="text-orange-400 font-semibold">{item.price}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-3xl backdrop-blur-sm border border-yellow-500/20"
            style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.08), rgba(0,0,0,0.4))' }}
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#FCEBE5' }}>
              <span className="text-3xl">🍖</span> Proteins
            </h3>
            <ul className="space-y-3">
              {menuItems.proteins.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group cursor-pointer p-3 rounded-xl bg-white/5 hover:bg-yellow-500/20 transition-all duration-300 border border-transparent hover:border-yellow-500/50"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 group-hover:text-white font-medium">{item.name}</span>
                    <span className="text-yellow-400 font-semibold">{item.price}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto mt-20 bg-gradient-to-br from-red-900/20 to-orange-900/20 p-10 rounded-3xl backdrop-blur-md border border-red-500/30 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#FCEBE5' }}>
                Special Combos
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Try our mouth-watering combo meals perfect for any occasion
              </p>

                            <div className="space-y-4 mb-8">

                {/* Shawarma Combos */}
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-2xl">🍖</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">Regular Combo 1</h3>
                    <p className="text-sm text-gray-400">Beef or chicken chunks · Extra creamy</p>
                  </div>
                  <span className="text-xl font-bold text-red-400">₦4,000</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-2xl">🍱</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">Regular Combo 2</h3>
                    <p className="text-sm text-gray-400">Single sausage · Beef or chicken chunks · Extra creamy</p>
                  </div>
                  <span className="text-xl font-bold text-red-400">₦4,500</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-2xl">🎁</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">Special Combo</h3>
                    <p className="text-sm text-gray-400">Single sausage · Beef or chicken chunks · Extra creamy</p>
                  </div>
                  <span className="text-xl font-bold text-red-400">₦5,000</span>
                </div>

                {/* Add-on / individual items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-3 p-3 bg-white/3 rounded-lg border border-white/6">
                    <span className="text-xl">🥩</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-200">Beef or chicken chunks</div>
                    </div>
                    <div className="text-sm font-semibold text-red-400">₦2,000</div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/3 rounded-lg border border-white/6">
                    <span className="text-xl">🧈</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-200">Extra creamy</div>
                    </div>
                    <div className="text-sm font-semibold text-red-400">₦1,000</div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/3 rounded-lg border border-white/6">
                    <span className="text-xl">🌭</span>
                    <div className="flex-1">
                      <div className="text-sm text-gray-200">Extra sausage</div>
                    </div>
                    <div className="text-sm font-semibold text-red-400">₦500</div>
                  </div>
                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${whatsappPrimary}?text=${encodeURIComponent("Hi P's Tasty Heaven! I want to order a combo meal")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #c50c2b 0%, #ff1744 100%)' }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order Combo
                </a>
                <a
                  href={`https://wa.me/${whatsappAlt}?text=${encodeURIComponent("Hi P's Tasty Heaven! I want to place an order")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-all border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  Alternate Contact
                </a>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-72 h-72 rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl border-4 border-white/10"
            >
              <img src="/shawarma.jpg" 
              alt="Delicious shawarma" 
              onLoad={() => console.log('BG loaded: /shawarma.jpg')}
             onError={(e) => console.warn('BG failed to load', e)}
          
              className="object-cover w-full h-full" />
            </motion.div>
          </div> 
        </motion.section>

        {/* Food Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FCEBE5' }}>
              Food Gallery
            </h2>
            <p className="text-gray-400 text-lg">A visual feast of our delicious offerings</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                               onLoad={() => console.log('Gallery loaded:', item.image)}
                  onError={(e) => console.warn('Gallery failed:', item.image, e)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                    <button
                      onClick={() => handleItemClick({ name: item.name, price: 'Contact' })}
                      className="text-sm px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <footer className="max-w-6xl mx-auto mt-20 pt-12 pb-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FCEBE5' }}>P's Tasty Heaven</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Where every bite feels like love. We serve delicious African delicacies, snacks, and premium proteins.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FCEBE5' }}>Contact Us</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>+234 915 037 5459</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>+234 902 256 4784</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FCEBE5' }}>Quick Order</h3>
              <a
                href={`https://wa.me/${whatsappPrimary}?text=${encodeURIComponent("Hi P's Tasty Heaven! I want to place an order")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-500 transition-colors text-sm font-medium"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              Crafted with love by <span className="font-semibold text-white">Cruz Lord</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">2025 P's Tasty Heaven. All rights reserved.</p>
          </div>
        </footer>
      </main>

      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${whatsappPrimary}?text=${encodeURIComponent("Hi P's Tasty Heaven! I want to place an order")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 z-50 shadow-2xl rounded-full p-5 flex items-center justify-center hover:shadow-green-500/50 transition-all duration-300"
        style={{ background: '#25D366' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.48C18.29 1.25 15.19 0 11.96 0 5.37 0 .07 5.3 .07 11.89c0 2.09.55 4.04 1.59 5.78L0 24l6.6-1.73c1.69.92 3.63 1.41 5.4 1.41 6.59 0 11.89-5.3 11.89-11.89 0-3.24-1.26-6.34-3.38-8.61z" fill="white"/>
        </svg>
      </motion.a>
    </div>
  )
}
