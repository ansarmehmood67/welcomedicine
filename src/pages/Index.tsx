import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ValuePropositionSection from "@/components/landing/ValuePropositionSection";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSection from "@/components/landing/ProblemSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import TreSempliciPassiSection from "@/components/landing/TreSempliciPassiSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AppWelmedProSection from "@/components/landing/AppWelmedProSection";
import CustomerCareSection from "@/components/landing/CustomerCareSection";
import SavingsCalculator from "@/components/landing/SavingsCalculator";
import QuotesSection from "@/components/landing/QuotesSection";
import PricingSection from "@/components/landing/PricingSection";
import PricingDetailsSection from "@/components/landing/PricingDetailsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import ScrollToTop from "@/components/landing/ScrollToTop";

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    // Delay scroll to allow framer-motion initial renders to settle
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ValuePropositionSection />
      <TrustBar />
      <ProblemSection />
      <TestimonialsSection />
      <TreSempliciPassiSection />
      <FeaturesSection />
      <BenefitsSection />
      <AppWelmedProSection />
      <WorkflowSection />
      <SavingsCalculator />
      <QuotesSection />
      <CustomerCareSection />
      <PricingSection />
      <PricingDetailsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
