import React from "react";

const DownloadSection = () => {
  return (
    <section
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-20"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-6 lg:gap-10">
        {/* Phone Image */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-start mb-10 md:mb-0">
          <img
            src="/mockups/download-phone.png"
            alt="Investock App"
            className="w-[220px] sm:w-[280px] md:w-full max-w-sm object-contain"
          />
        </div>

        {/* Text & CTA */}
        <div className="w-full md:w-[55%] text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            The power of Investock.ai <br />
            download now & revolutionize <br />
            your workflow
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-xl mx-auto md:mx-0">
            Download our app today to streamline your workflow, enhance
            collaboration, and achieve peak productivity. Revolutionize how you
            manage tasks and projects with our intuitive tools designed to
            empower your team.
          </p>

          <div className="flex flex-col  items-center md:items-start justify-center md:justify-start gap-3 flex-wrap">
            <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md hover:bg-blue-700 transition">
              Download App
            </button>
            <div className= "flex gap-3 ">
        
            <img src="/badges/playstore.png" alt="Google Play" className="h-8" />
            <img src="/badges/appstore.png" alt="App Store" className="h-8" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;