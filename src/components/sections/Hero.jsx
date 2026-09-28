import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-700 text-white">
     
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-4 pt-32 text-center md:px-8 md:pt-36 xl:px-0">
        <h1 className="max-w-[820px] font-heading text-[36px] font-semibold leading-[1.2] md:text-[56px] lg:text-heading-l">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mt-6 max-w-[640px] text-body-s md:text-body-m text-white/80">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search */}
        <form
          role="search"
          className="mt-8 flex w-full max-w-[520px] items-center gap-2 rounded-full bg-white p-1.5"
        >
          <input
            type="search"
            placeholder="Course, topic, creator"
            className="min-w-0 flex-1 bg-transparent px-4 text-body-s text-neutral-950 placeholder:text-neutral-400 outline-none"
          />
          <Button type="submit">Search</Button>
        </form>

      
        <div className="relative mt-12 h-[280px] w-full max-w-[560px] md:h-[380px]">
          <div className="absolute bottom-0 left-1/2 h-[560px] w-[560px] -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary-500 md:h-[720px] md:w-[720px]" />
          <Image
            src="/images/hero-person.png"
            alt="Smiling student holding a laptop"
            width={520}
            height={520}
            priority
            className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain"
          />
        </div>
      </div>
    </section>
  );
}