// components/LeadForm.jsx
import { motion } from "framer-motion";

export default function LeadForm() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
            alt="gym training"
            className="rounded-2xl shadow-lg w-full `h-[400px]` object-cover"
          />
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Get Your Free Pass</h2>

          <p className="mb-6 text-gray-600">
            Start your fitness journey today. No commitment required.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
            />

            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition">
              Claim Free Trial
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
