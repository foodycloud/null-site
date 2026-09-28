import InteractiveBackground from "@/components/InteractiveBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LaunchTicker from "@/components/LaunchTicker";
import TheIdea from "@/components/TheIdea";
import Manifesto from "@/components/Manifesto";
import WhyNull from "@/components/WhyNull";
import Community from "@/components/Community";
import Token from "@/components/Token";
import HowItWorks from "@/components/HowItWorks";
import TheInternet from "@/components/TheInternet";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#D4FF00] focus:text-[#08090C] focus:px-4 focus:py-2 focus:text-xs focus:font-mono-tech uppercase font-bold rounded-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <LaunchTicker />
        <TheIdea />
        <Manifesto />
        <WhyNull />
        <LaunchTicker />
        <Community />
        <Token />
        <HowItWorks />
        <TheInternet />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
