// components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
        alt="gym"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Build Your Dream Body
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl mb-6"
        >
          Start today for just $1 — limited time offer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition">
            Get Free Pass
          </button>
        </motion.div>
      </div>
    </div>
  );
}
