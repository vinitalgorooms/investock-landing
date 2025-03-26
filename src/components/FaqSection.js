import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How do I get started with your app?",
    answer:
      "Sign up, complete onboarding, and start using our tools to manage your work instantly.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "Pricing is based on team size and chosen plan. You can see all tiers on our pricing page.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, plans can be changed anytime from your billing dashboard.",
  },
  {
    question: "Is my data secure with your app?",
    answer:
      "Absolutely. We use bank-grade encryption and secure cloud infrastructure.",
  },
  {
    question: "Can your app integrate with other tools we use?",
    answer:
      "Yes! We integrate with Slack, Google Workspace, Zapier, and more.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "You can cancel from your account settings. Your access continues until the end of your billing cycle.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq"className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Have Any Questions?
        </h2>
        <p className="text-sm text-gray-500 max-w-lg mx-auto">
          Whether you're curious about features, pricing, or technical support,
          find the information you need to make informed decisions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center text-left text-gray-800 font-medium"
            >
              <span>{faq.question}</span>
              <span className="text-xl text-gray-500">
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-500">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;