import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedSection from "./components/TrustedSection";
import FeaturesSection from "./components/FeaturesSection";
import SuiteSection from "./components/SuiteSection"; 
import PersonalizeSection from "./components/PersonalizeSection";
import AdvancedFeaturesSection from "./components/AdvancedFeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Hero />
      <TrustedSection />
      <FeaturesSection />
      <SuiteSection />
      <PersonalizeSection />
      <AdvancedFeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
export default App;