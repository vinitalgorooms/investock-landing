import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      highlight: "“Excellent customer support”",
      text: "What sets good apart is its intuitive design and robust feature set. We can easily create tasks, assign them to team members, & track progress in real-time. Moreover, the integration with third-party tools like Slack and Google Workspace.",
      name: "Courtney Henry",
      faded: false,
    },
    {
      id: 2,
      highlight: "“Excellent customer support”",
      text: "What sets good apart is its intuitive design and robust feature set. We can easily create tasks, assign them to team members, & track progress in real-time. Moreover, the integration with third-party tools like Slack and Google Workspace.",
      name: "Courtney Henry",
      faded: false,
    },
    {
      id: 3,
      highlight: "“Excellent customer support”",
      text: "What sets good apart is its intuitive design and robust feature set. We can easily create tasks, assign them to team members, & track progress in real-time. Moreover, the integration with third-party tools like Slack and Google Workspace.",
      name: "Courtney Henry",
      faded: false,
    },
    {
      id: 4,
      highlight: "“Excellent customer support”",
      text: "What sets good apart is its intuitive design and robust feature set. We can easily create tasks, assign them to team members, & track progress in real-time. Moreover, the integration with third-party tools like Slack and Google Workspace.",
      name: "Courtney Henry",
      faded: true,
    },
    {
      id: 5,
      highlight: "“Excellent customer support”",
      text: "What sets good apart is its intuitive design and robust feature set. We can easily create tasks, assign them to team members, & track progress in real-time. Moreover, the integration with third-party tools like Slack and Google Workspace.",
      name: "Courtney Henry",
      faded: true,
    },
    {
      id: 6,
      highlight: "“Excellent customer support”",
      text: "What sets good apart is its intuitive design and robust feature set. We can easily create tasks, assign them to team members, & track progress in real-time. Moreover, the integration with third-party tools like Slack and Google Workspace.",
      name: "Courtney Henry",
      faded: true,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Our Clients' Experiences
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Discover their success stories, insights, and feedback, showcasing
          the impact of our app on their businesses and workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="text-left">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>

            {/* Text */}
            <p
              className={`font-semibold mb-2 ${
                t.faded ? "text-gray-400" : "text-gray-900"
              }`}
            >
              {t.highlight}
            </p>
            <p
              className={`text-sm leading-relaxed ${
                t.faded ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t.text}
            </p>
            <p
              className={`text-sm font-semibold mt-4 ${
                t.faded ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;