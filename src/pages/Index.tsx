import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSection from "@/components/landing/ProblemSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SavingsCalculator from "@/components/landing/SavingsCalculator";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <TrustBar />
    <ProblemSection />
    <TestimonialsSection />
    <FeaturesSection />
    <BenefitsSection />
    <HowItWorksSection />
    <WorkflowSection />
    <SavingsCalculator />
    <PricingSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </>
);

export default Index;
