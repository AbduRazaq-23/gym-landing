// components/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Is there any contract?",
    answer: "No, you can cancel anytime without any hidden fees.",
  },
  {
    question: "Do you offer personal trainers?",
    answer: "Yes, certified trainers are available for all plans.",
  },
  {
    question: "Can beginners join?",
    answer: "Absolutely! Our programs are beginner-friendly.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={index} className="mb-4 border rounded-xl overflow-hidden">
            {/* QUESTION BUTTON */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold"
            >
              {faq.question}

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Plus />
              </motion.span>
            </button>

            {/* ANSWER */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
