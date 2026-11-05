import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import FeaturedBrandsSection from "@/components/home/FeaturedBrandsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#24231F]">
      <Navbar />

      <main>
        <HeroSection />
        <CollectionsSection />
        <FeaturedBrandsSection />
      </main>

      <Footer />
    </div>
  );
}