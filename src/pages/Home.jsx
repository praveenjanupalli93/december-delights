import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Signature } from "@/components/Signature";
import { FoodMenu } from "@/components/FoodMenu";
import { MenuCards } from "@/components/MenuCards";
import { Gallery } from "@/components/Gallery";
import { WhyUs } from "@/components/WhyUs";
import { Visit } from "@/components/Visit";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLenis } from "@/lib/use-lenis";

export default function Home() {
  useLenis();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-forest-darker text-cream">
      <Loader />
      {ready && <Nav />}
      <main>
        <Hero />
        <Story />
        <Signature />
        <FoodMenu />
        <MenuCards />
        <Gallery />
        <WhyUs />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
