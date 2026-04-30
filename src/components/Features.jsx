import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Users } from "lucide-react";

const features = [
  { icon: <Dumbbell size={40} />, text: "Modern Equipment" },
  { icon: <HeartPulse size={40} />, text: "Personal Training" },
  { icon: <Users size={40} />, text: "Community Support" },
];

export default function Features() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col items-center text-center"
          >
            {/* ICON CENTERED */}
            <div className="mb-4 text-green-500 flex items-center justify-center">
              {f.icon}
            </div>

            <p className="font-semibold">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
