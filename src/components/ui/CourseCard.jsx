import { Star } from "lucide-react";
import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <article className="rounded-2xl border border-neutral-100 bg-white p-3 shadow-sm">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
       
      </div>
      <div className="px-1 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-body-m font-semibold leading-tight">
            {course.title}
          </h3>
         <span className="flex items-center gap-1 text-body-s text-neutral-500">
               {course.rating}
     <Star className="size-4 fill-neutral-300 text-neutral-300" aria-hidden />
   </span>

        </div>
        <p className="mt-1 text-body-xs text-primary-700">by {course.author}</p>

        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-full bg-neutral-50 px-3 py-1 text-body-xs">
            {course.level}
          </span>
          <Image src="/images/avatars.png" alt="Students" width={90} height={28} />
        </div>
        
        <p className="mt-3 font-heading text-heading-xs font-semibold text-primary-700">
          ${course.price}
          <span className="ml-1 font-body text-body-xs font-normal text-neutral-500">
            /lifetime
          </span>
        </p>
      </div>
    </article>
  );
}