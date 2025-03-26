import React from "react";

const SuiteSection = () => {
  return (
    <section className="bg-black text-white pt-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Comprehensive Suite of Features
          </h2>
          <ul className="space-y-6 text-lg text-gray-300">
            <li className="border-b border-gray-700 pb-3">
              Streamlining Daily Tasks
            </li>
            <li className="border-b border-gray-700 pb-3">
              Financial Management
            </li>
            <li className="border-b border-gray-700 pb-3">
              Enhancing Communication
            </li>
            <li className="border-b border-gray-700 pb-3">
              Boosting Productivity
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/suite-hand-mock.png"
            alt="Mobile App UI"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;