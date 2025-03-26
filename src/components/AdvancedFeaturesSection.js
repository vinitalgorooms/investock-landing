import React from "react";

const AdvancedFeaturesSection = () => {
  return (
    <section id="features"className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* ✅ ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#f9fafb] p-5 rounded-xl shadow-sm flex flex-col justify-between min-h-[340px]">
            <div>
              <h3 className="text-lg font-bold mb-2">Growth Metrics</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Overall growth trends to understand your app’s performance.
              </p>
              <img
                src="/features/growth-icons.png"
                alt="Growth Icons"
                className="mb-4 object-contain"
              />
            </div>
            <p className="text-xs text-gray-500">27M+ Annual Growth</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between min-h-[340px]">
            <div>
              <h3 className="text-lg font-bold mb-2">Sync your apps</h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                Your favorite apps for seamless integration, ensuring your data stays up-to-date.
              </p>
              <p className="text-lg text-[#3063ff] font-semibold">28k</p>
              <p className="text-xs text-gray-400 mb-3">Total App Users</p>
            </div>
            <div>
              <img
                src="/features/ai-workflow.jpg"
                alt="AI Workflow"
                className="mb-4 object-contain rounded-md"
              />
              <p className="text-xs text-gray-500 mt-2">How our AI transforms your workflow</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f7fafd] p-5 rounded-xl shadow-sm text-center flex flex-col items-center justify-between min-h-[340px]">
            <div>
              <h3 className="text-lg font-bold mb-2">Collaborate Securely</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Share files, manage projects & communicate safely with your team.
              </p>
            </div>
            <img
              src="/features/collab-phone.png"
              alt="Phone"
              className="mb-4 object-contain"
            />
          </div>
        </div>

        {/* ✅ ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#f9fafb] p-5 rounded-xl shadow-sm flex flex-col justify-between items-start min-h-[300px]">
            <h3 className="text-lg font-bold mb-16">Core Features Explained</h3>
            <img
              src="/features/core-phone.png"
              alt="App UI"
              className="mb-4 object-contain"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#f9fafb] p-5 rounded-xl shadow-sm flex flex-col justify-between min-h-[300px] text-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Highly Customizable</h3>
              <p className="text-sm text-gray-600">
                Tailor workflows, interfaces, and features to match your specific requirements.
              </p>
            </div>
            <img
              src="/features/custom-chart.png"
              alt="Bar Graph"
              className="w-full max-w-xs mx-auto mt-4"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-[#f9fafb] p-5 rounded-xl shadow-sm flex items-center justify-center min-h-[300px]">
            <img
              src="/features/growth-donut.png"
              alt="Growth Donut"
              className="mb-4 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;