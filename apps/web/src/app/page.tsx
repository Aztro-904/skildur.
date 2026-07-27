import { Hero } from "@/components/marketing/hero";
import { Navbar } from "@/components/marketing/navbar";
import { TrustedSection } from "@/components/marketing/trusted-section";
import { ConnectedWorkspace } from "@/components/marketing/connected-workspace";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ConnectedWorkspace />
        <TrustedSection />
      </main>
    </>
  );
}