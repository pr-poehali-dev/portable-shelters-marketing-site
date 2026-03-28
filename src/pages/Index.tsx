import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/components/constants";
import Header from "@/components/Header";
import {
  HeroSection,
  StatsSection,
  ProductsSection,
  WhyUsSection,
  PortfolioSection,
  CtaSection,
  ContactsSection,
  Footer,
} from "@/components/Sections";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F3F0] font-body">
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        activeSection={activeSection}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onScrollTo={scrollTo}
      />
      <HeroSection onScrollTo={scrollTo} />
      <StatsSection />
      <ProductsSection onScrollTo={scrollTo} />
      <WhyUsSection />
      <PortfolioSection />
      <CtaSection onScrollTo={scrollTo} />
      <ContactsSection />
      <Footer onScrollTo={scrollTo} />
    </div>
  );
}
