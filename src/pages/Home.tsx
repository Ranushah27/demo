import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { StickyMobileCta } from "../components/layout/StickyMobileCta";
import { Hero } from "../components/home/Hero";
import { Introduction } from "../components/home/Introduction";
import { ChefSection } from "../components/home/ChefSection";
import { PrivateDining } from "../components/home/PrivateDining";
import { HowItWorks } from "../components/home/HowItWorks";
import { CustomExperienceCta } from "../components/home/CustomExperienceCta";
import { MenusSection } from "../components/home/MenusSection";
import { GallerySection } from "../components/home/GallerySection";
import { InstagramSection } from "../components/home/InstagramSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { FaqSection } from "../components/home/FaqSection";

export function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <Introduction />
        <ChefSection />
        <PrivateDining />
        <HowItWorks />
        <CustomExperienceCta />
        <MenusSection />
        <GallerySection />
        <InstagramSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
