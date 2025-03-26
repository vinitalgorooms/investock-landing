import React from "react";

const companies = [
  { name: "Hourglass", logo: "/logos/hourglass.png" },
  { name: "Luminous", logo: "/logos/luminous.png" },
  { name: "GlobalBank", logo: "/logos/globalbank.png" },
  { name: "Capsule", logo: "/logos/capsule.png" },
  { name: "Lightbox", logo: "/logos/lightbox.png" },
  { name: "Command-R", logo: "/logos/commandr.png" },
];

const TrustedSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-gray-600 text-sm font-medium mb-10">
        Top companies trust us for delivering excellence in app solutions
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
        {companies.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={company.name}
            className="h-8 grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedSection;