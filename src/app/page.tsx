import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import MobileBuyBar from "@/components/layout/MobileBuyBar";
import Hero from "@/components/sections/Hero";
import CapacitySection from "@/components/sections/CapacitySection";
import CompatibilitySection from "@/components/sections/CompatibilitySection";
import PortsSection from "@/components/sections/PortsSection";
import DisplaySection from "@/components/sections/DisplaySection";
import DetailShowcase from "@/components/sections/DetailShowcase";
import LifestyleSection from "@/components/sections/LifestyleSection";
import SpecsSection from "@/components/sections/SpecsSection";
import PurchaseSection from "@/components/sections/PurchaseSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background pb-20 sm:pb-0">
      <Header />
      <CartDrawer />

      <main className="flex-1">
        <Hero />
        <CapacitySection />
        <CompatibilitySection />
        <PortsSection />
        <DisplaySection />
        <DetailShowcase />
        <LifestyleSection />
        <SpecsSection />
        <PurchaseSection />
        <ReviewsSection />
        <FinalCTA />
      </main>

      <Footer />
      <MobileBuyBar />
    </div>
  );
}
