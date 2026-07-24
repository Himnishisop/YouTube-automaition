import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee, { LogoStrip } from "./components/Marquee";
import Work from "./components/Work";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";
import Process from "./components/Process";
import Results from "./components/Results";
import Faq from "./components/Faq";
import CTA from "./components/CTA";
import WhatsAppFab from "./components/WhatsAppFab";
import { useRevealObserver } from "./hooks/useAnim";

export default function App() {
  useRevealObserver();

  return (
    <div className="relative min-h-screen bg-ink text-bone">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <LogoStrip />
        <Work />
        <Services />
        <WhyMe />
        <Process />
        <Results />
        <Faq />
        <CTA />
      </main>
      <WhatsAppFab />
    </div>
  );
}
