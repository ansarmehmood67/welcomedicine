import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ValuePropositionSection from "@/components/landing/ValuePropositionSection";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSection from "@/components/landing/ProblemSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SavingsCalculator from "@/components/landing/SavingsCalculator";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <ValuePropositionSection />
    <ProblemSection />
    <TrustBar />
    <TestimonialsSection />
    <FeaturesSection />
    <WorkflowSection />
    <BenefitsSection />
    <SavingsCalculator />
    <PricingSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </>
);

export default Index;
