

import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 xl:px-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}