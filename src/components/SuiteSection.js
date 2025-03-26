import React from "react";

const SuiteSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-end gap-16 min-h-[500px]">
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
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

        {/* Right Side Image Aligned to Bottom */}
        <div className="flex justify-center items-end h-full">
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