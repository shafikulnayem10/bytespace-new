import Navbar from "@/components/layout/Navbar";
import BrandLogos from "@/components/sections/BrandLogos";
import CourseCategories from "@/components/sections/CourseCategories";
import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandLogos />
        <CourseCategories />
        <Courses></Courses>
      </main>
    </>
  );
}