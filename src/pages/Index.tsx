import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SchoolsSection from "@/components/SchoolsSection";
import ReferencesSection from "@/components/ReferencesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <SchoolsSection />
        <ReferencesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
