import { Palette, Code2, Laptop, Briefcase, TrendingUp, Camera } from "lucide-react";

const paths = [
  { label: "Design", icon: Palette },
  { label: "Development", icon: Code2 },
  { label: "IT & Software", icon: Laptop },
  { label: "Business", icon: Briefcase },
  { label: "Marketing", icon: TrendingUp },
  { label: "Photography", icon: Camera },
];

export default function LearningPaths() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-4 text-center md:px-8 xl:px-0">
        <h2 className="font-heading text-[28px] font-semibold leading-[1.2] text-neutral-950 md:text-heading-m">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-body-s text-neutral-500 md:text-body-m">
          At Bytespace, we believe in empowering individuals through
          knowledge. Our diverse range of courses spans various fields,
          ensuring there&apos;s something for everyone. Unleash your potential
          and explore our carefully curated categories.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {paths.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-100 px-4 py-8 shadow-sm"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-secondary-500">
                <Icon className="size-6 text-neutral-950" strokeWidth={2} />
              </span>
              <p className="text-body-s font-medium text-neutral-950">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
