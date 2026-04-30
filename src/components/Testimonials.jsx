// components/Testimonials.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed",
    text: "I lost 10kg in 3 months. Amazing gym!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara",
    text: "Best trainers and environment!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ali",
    text: "Highly recommended for beginners.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Members Say</h2>

      <div className="relative max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) next();
              if (info.offset.x > 50) prev();
            }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <img
              src={testimonials[index].image}
              alt=""
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic">"{testimonials[index].text}"</p>
            <h4 className="mt-4 font-bold">— {testimonials[index].name}</h4>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button onClick={prev} className="bg-gray-300 px-4 py-2 rounded">
            ←
          </button>
          <button onClick={next} className="bg-gray-300 px-4 py-2 rounded">
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-green-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
