import Navbar from "@/components/landing/Navbar";
import WhyDesktop from "@/components/landing/WhyDesktop";
import Footer from "@/components/landing/Footer";

export default function WhyDesktopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <WhyDesktop />
      </div>
      <Footer />
    </div>
  );
}
