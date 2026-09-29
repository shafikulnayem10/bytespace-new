import Image from "next/image";
import { Check } from "lucide-react";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthPaths() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
     
      <Image
        src="/images/growth/ellipse-1.png"
        alt=""
        aria-hidden
        width={2048}
        height={1362}
        className="pointer-events-none absolute -top-40 right-1/4 w-[900px] max-w-none select-none opacity-90 md:w-[1100px]"
      />
      <Image
        src="/images/growth/ellipse-2.png"
        alt=""
        aria-hidden
        width={843}
        height={1106}
        className="pointer-events-none absolute -bottom-20 -left-20 w-[500px] max-w-none select-none opacity-90 md:w-[650px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-8 xl:px-0">
        {/* Row 1: text left, boy image right */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-[28px] font-semibold leading-[1.2] text-neutral-950 md:text-heading-m">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-4 text-body-s text-neutral-600 md:text-body-m">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            <div className="mt-8 flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-heading-s font-semibold text-neutral-950">
                    {s.value}
                  </p>
                  <p className="mt-1 text-body-s text-neutral-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px]">
            <Image
              src="/images/growth/boy-pic.png"
              alt="Learner reviewing course progress"
              width={1400}
              height={1160}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Row 2: girl image left, text right */}
        <div className="mt-20 grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 mx-auto w-full max-w-[420px] md:order-1">
            <Image
              src="/images/growth/girl-pic.png"
              alt="Creator managing course revenue"
              width={1150}
              height={1240}
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-heading text-[28px] font-semibold leading-[1.2] text-neutral-950 md:text-heading-m">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-4 text-body-s text-neutral-600 md:text-body-m">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary-700">
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-body-s text-neutral-700 md:text-body-m">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}