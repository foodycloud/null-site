import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheIdea from "@/components/TheIdea";
import Manifesto from "@/components/Manifesto";
import WhyNull from "@/components/WhyNull";
import Community from "@/components/Community";
import Token from "@/components/Token";
import Transparency from "@/components/Transparency";
import TheInternet from "@/components/TheInternet";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#F1F1ED] focus:text-[#0A0A0A] focus:px-4 focus:py-2 focus:text-xs focus:font-mono-tech uppercase font-bold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TheIdea />
        <Manifesto />
        <WhyNull />
        <Community />
        <Token />
        <Transparency />
        <TheInternet />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
