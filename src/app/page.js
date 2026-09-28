import Navbar from "@/components/layout/Navbar";
import BrandLogos from "@/components/sections/BrandLogos";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandLogos></BrandLogos>
      </main>
    </>
  );
}