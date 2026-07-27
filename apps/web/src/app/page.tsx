import { Hero } from "@/components/marketing/hero";
import { Navbar } from "@/components/marketing/navbar";
import { TrustedSection } from "@/components/marketing/trusted-section";
import { ConnectedWorkspace } from "@/components/marketing/connected-workspace";
import { Problem } from "@/components/marketing/problem";
import { Features } from "@/components/marketing/features";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Pricing } from "@/components/marketing/pricing";
import { Roadmap } from "@/components/marketing/roadmap";
import { CTA } from "@/components/marketing/cta";
import { Footer } from "@/components/marketing/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />
        <Problem />
        <ConnectedWorkspace />
        <Features />
        <HowItWorks />
        <Pricing />
        <Roadmap />
        <CTA />
        <TrustedSection />
      </main>

      <Footer />
    </>
  );
}