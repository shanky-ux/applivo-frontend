import Navbar from "@/components/landing/Navbar";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
