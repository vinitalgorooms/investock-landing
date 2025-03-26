import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#f3f6fd] pt-24 pb-32 px-4 md:px-20 text-center overflow-hidden">
      {/* Headings */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#3063ff] leading-tight mb-4">
        Maximize your <br /> potential with Investock.ai
      </h1>

      {/* Subheading */}
      <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-8">
        Discover seamless functionality & an intuitive interface all in one place.
      </p>

      {/* CTA */}
      <a
        href="#download"
        className="inline-block bg-[#3063ff] hover:bg-[#274ddb] text-white px-6 py-3 rounded-lg font-semibold text-sm transition mb-16"
      >
        Download App
      </a>

      {/* Hero Image */}
      <div className="w-full flex justify-center">
        <img
          src="/hero-app-mock.png"
          alt="Investock App Preview"
          className="w-full max-w-[1400px] md:max-w-[90%] lg:max-w-[1200px] xl:max-w-[1400px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;