import React from "react";

const PersonalizeSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3063ff] leading-snug mb-6">
            Personalize your <br />
            interface for <br />
            maximum efficiency
          </h2>
          <p className="text-gray-600 text-base mb-8 max-w-md mx-auto lg:mx-0">
            With flexible layout options, you can arrange tools and features to suit your unique needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#download"
              className="bg-[#3063ff] hover:bg-[#274ddb] text-white px-6 py-3 rounded-lg font-semibold text-sm transition"
            >
              Download App
            </a>
            <div className="flex items-center gap-3">
              <img src="/store-google.png" alt="Google Play" className="h-10" />
              <img src="/store-apple.png" alt="App Store" className="h-10" />
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/personalize-mock.png"
            alt="App Interface Mockup"
            className="w-full max-w-3xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalizeSection;