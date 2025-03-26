import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#f3f6fd] pt-16 md:pt-24 pb-20 md:pb-32 px-4 md:px-20 text-center overflow-hidden">
      {/* Headings */}
      <h1 className="mt-6 text-[26px] sm:text-4xl md:text-5xl font-bold text-[#3063ff] leading-[1.3] md:leading-tight mb-3 sm:mb-4">
        Maximize your <br className="hidden sm:block" />
        potential with <span className="block sm:inline">Investock.ai</span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-500 text-[14px] sm:text-base md:text-lg max-w-[90%] sm:max-w-md md:max-w-xl mx-auto mb-6 md:mb-8">
        Discover seamless functionality & an intuitive interface all in one place.
      </p>

      {/* CTA */}
      <a
        href="#download"
        className="inline-block bg-[#3063ff] hover:bg-[#274ddb] text-white px-6 py-3 rounded-md font-medium text-sm transition mb-10 sm:mb-16 w-full max-w-xs sm:w-auto"
      >
        Download App
      </a>

      {/* Hero Image */}
      <div className="w-full flex justify-center">
        <img
          src="/hero-app-mock.png"
          alt="Investock App Preview"
          className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[90%] lg:max-w-[1200px] xl:max-w-[1400px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;