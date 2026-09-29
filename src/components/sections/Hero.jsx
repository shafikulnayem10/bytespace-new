import Image from "next/image";
import Button from "@/components/ui/Button";

const shapes = [
  { src: "spiral-left.png", w: 385, h: 385, mobileW: 150, pos: "left-[-60px] top-[110px] md:left-[-30px] md:top-[130px]" },
  { src: "squiggle.png", w: 175, h: 175, mobileW: 0, pos: "left-[8%] top-[350px] hidden md:block lg:left-[12%]" },
  { src: "ring.png", w: 342, h: 342, mobileW: 0, pos: "bottom-[20px] left-[3%] hidden md:block lg:left-[6%]" },
  { src: "cone.png", w: 188, h: 188, mobileW: 0, pos: "right-[12%] top-[290px] hidden md:block" },
  { src: "spiral-right.png", w: 330, h: 330, mobileW: 0, pos: "bottom-[40px] right-[2%] hidden md:block" },
  { src: "cylinder.png", w: 370, h: 370, mobileW: 130, pos: "right-[-60px] top-[100px] md:right-[-20px]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-700 text-white">
      {/* grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* 3D shapes */}
      {shapes.map((s) => (
        <Image
          key={s.src}
          src={`/images/hero/${s.src}`}
          alt=""
          aria-hidden
          width={s.w}
          height={s.h}
          className={`pointer-events-none absolute h-auto select-none ${s.pos}`}
          style={{
            width: `clamp(${s.mobileW || s.w}px, 18vw, ${s.w}px)`,
          }}
        />
      ))}

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-4 pt-32 text-center md:px-8 md:pt-36 xl:px-0">
        <h1 className="max-w-[980px] font-heading text-[36px] font-semibold leading-[1.2] md:text-[56px] lg:text-heading-l">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mt-6 max-w-[640px] text-body-s text-white/80 md:text-body-m">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          role="search"
          className="mt-8 flex w-full max-w-[520px] items-center gap-2 rounded-full bg-white p-1.5"
        >
          <input
            type="search"
            placeholder="Course, topic, creator"
            className="min-w-0 flex-1 bg-transparent px-4 text-body-s text-neutral-950 outline-none placeholder:text-neutral-400"
          />
          <Button type="submit">Search</Button>
        </form>

        {/* hero person, circle, floating cards */}
        <div className="relative mt-12 h-[300px] w-full max-w-[720px] md:h-[420px]">
          <div className="absolute bottom-0 left-1/2 h-[560px] w-[560px] -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary-500 md:h-[720px] md:w-[720px]" />

          <Image
            src="/images/hero-person.png"
            alt="Smiling student holding a laptop"
            width={578}
            height={541}
            priority
            className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain"
          />

          {/* UI/UX Design card */}
          <div className="absolute left-0 top-6 hidden w-[208px] h-[70px] rounded-xl bg-white p-3 text-left text-neutral-950 shadow-lg md:block">
            <p className="font-heading text-body-s font-semibold">UI/UX Design</p>
            <p className="mt-0.5 text-body-xs text-neutral-500">
              300 Courses &bull; 1000+ Students
            </p>
          </div>

          {/* Learning Progress card */}
          <div className="absolute right-0 top-0 w-[232px] h-[131px] rounded-xl bg-white p-3 text-left text-neutral-950 shadow-lg md:w-[210px] md:p-4">
            <p className="text-body-xs text-neutral-500">Learning Progress</p>
            <p className="mt-1 font-heading text-[28px] font-semibold leading-none md:text-heading-s">
              55%
            </p>
            <div className="mt-3 h-1.5 rounded-full bg-neutral-100">
              <div className="h-full w-[55%] rounded-full bg-secondary-500" />
            </div>
          </div>

          {/* Happy Students card */}
          <div className="absolute bottom-6 left-0 hidden rounded-xl shadow-lg md:block">
            <Image
              src="/images/hero/avatars-2k.png"
              alt="Students"
              width={200}
              height={45}
            />
          </div>
        </div>
      </div>
    </section>
  );
}