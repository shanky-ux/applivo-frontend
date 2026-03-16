import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import HowItWorks from "@/components/landing/HowItWorks";
import JobCards from "@/components/landing/JobCards";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import PricingSection from "@/components/landing/PricingSection";
import WhyDesktop from "@/components/landing/WhyDesktop";
import DownloadCTA from "@/components/landing/DownloadCTA";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorks />
      <JobCards />
      <FeaturesGrid />
      <PricingSection />
      <WhyDesktop />
      <FAQSection />
      <DownloadCTA />
      <Footer />
    </div>
  );
}
