import React from "react";

const features = [
  {
    icon: "/features/feature-1.png",
    text: "Our system verifies user identities through various methods, including passwords, biometrics.",
  },
  {
    icon: "/features/feature-2.png",
    text: "Allowing users to share content & engage with your app through their favorite social networks.",
  },
  {
    icon: "/features/feature-3.png",
    text: "Providing a personalized and intuitive interface that enhances user experience & productivity.",
  },
  {
    icon: "/features/feature-4.png",
    text: "Monitor app performance, and generate detailed reports to make informed decisions.",
  },
  {
    icon: "/features/feature-5.png",
    text: "Connect your app to popular social platforms, allowing users to share content.",
  },
  {
    icon: "/features/feature-6.png",
    text: "Sync your app with popular calendar services to manage events, set reminders.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center justify-start gap-6">
            <img
              src={feature.icon}
              alt={`Feature ${index + 1}`}
              className="h-14 w-14 object-contain"
            />
            <p className="text-sm text-gray-700 max-w-xs">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;