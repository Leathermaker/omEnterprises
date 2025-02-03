import { WideScreenHandler } from "@/components";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react"; // Import Framer Motion

const Faq: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your OTP SMS Gateway reliable?",
      answer:
        "We are always dedicated to providing quality service. Thus, we always make use of high-end technologies while utilising years of experience that we have gathered to provide reliable OTP SMS service. That's why we are the Best Bulk SMS Service Provider in India.",
    },
    {
      question: "Within how much time does the OTP SMS reach customers?",
      answer:
        "It usually takes around 2-6 seconds to reach the customers. Best Bulk SMS Service Provider in India.",
    },
    {
      question: "How long is the OTP valid?",
      answer: "OTP is valid for 15 minutes for one-time use only.",
    },
    {
      question: "How secure is OTP Verification?",
      answer:
        "Our OTP SMS uses two-factor authentication which protects the data of the customers and keeps your website secured. Consult with the Best Bulk SMS Service Provider in India.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <WideScreenHandler>
      <XpaddingWrapper className="pt-6 pb-24">
        <div className="py-12 relative">
          <h1 className="absolute top-2 left-0 right-0 text-6xl font-bold text-OMblue bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent text-center">
            FAQ
          </h1>
          <h1 className="text-4xl font-bold text-center text-blue-950">
            Frequently Asked <span className="text-OMblue">Questions</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={`FAQ_${index}`}
              className="bg-gray-100 rounded-lg p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h1 className="md:text-2xl text-lg font-semibold">{faq.question}</h1>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <LuPlus className="text-2xl" />
                </motion.div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-700 lg:w-8/12">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Faq;