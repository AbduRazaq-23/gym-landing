// components/Pricing.jsx
import { motion } from "framer-motion";

const plans = [
  { name: "Basic", price: "$12", features: ["Gym Access"] },
  { name: "Pro", price: "$18", features: ["Classes", "Trainer"] },
  { name: "Premium", price: "$25", features: ["All Access"] },
];

export default function Pricing() {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Choose Your Plan</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-2xl my-4">{plan.price}</p>

            {plan.features.map((f, idx) => (
              <p key={idx}>{f}</p>
            ))}

            <button className="mt-4 bg-green-500 px-4 py-2 rounded">
              Join Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
