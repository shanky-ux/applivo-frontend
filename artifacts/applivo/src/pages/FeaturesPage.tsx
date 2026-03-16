import Navbar from "@/components/landing/Navbar";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Footer from "@/components/landing/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <div className="py-24" style={{ background: "#0D1117" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-center" style={{ color: "#E6EDF3" }}>
              Powerful Features
            </h1>
            <p className="text-lg text-center mb-16" style={{ color: "#8B949E" }}>
              Everything you need to automate your job search
            </p>
          </div>
          <FeaturesGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}
