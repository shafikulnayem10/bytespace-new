import Navbar from "@/components/layout/Navbar";
import BrandLogos from "@/components/sections/BrandLogos";
import CourseCategories from "@/components/sections/CourseCategories";
import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";
import LearningPaths from "@/components/sections/LearningPaths";
import GrowthPaths from "@/components/sections/GrowthPaths";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandLogos />
        <CourseCategories />
        <Courses></Courses>
        <LearningPaths></LearningPaths>
        <GrowthPaths></GrowthPaths>
      </main>
    </>
  );
}