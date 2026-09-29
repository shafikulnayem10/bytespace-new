import Image from "next/image";

const shapes = [
  // Left side shapes
  { src: "squiggle-1.png", w: 385, h: 385, mobileW: 80, pos: "left-[-0.1%] top-[-6px]" },
  { src: "squiggle-white.png", w: 176, h: 176, mobileW: 0, pos: "left-[12%] top-[10px] hidden md:block" },
  { src: "half-circle.png", w: 188, h: 188, mobileW: 0, pos: "left-[0%] bottom-[40px] hidden md:block" },
  { src: "ring.png", w: 342, h: 342, mobileW: 0, pos: "bottom-[1px] left-[3%] hidden md:block lg:left-[6%]" },

  // Right side shapes
  { src: "triangle.png", w: 188, h: 188, mobileW: 72, pos: "right-[15%] top-[20px]" },
  { src: "cone.png", w: 250, h: 340, mobileW: 0, pos: "right-[-0.5%] top-[4px]  bottom-[1px] hidden md:block" },
  { src: "squiggle-2.png", w: 390, h: 390, mobileW: 80, pos: "right-[10%] bottom-[1px]" },
];

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-700 py-20 text-center text-white md:py-24">
   
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* 3D Shapes */}
      {shapes.map((s) => (
        <Image
          key={s.src}
          src={`/images/creator-cta/${s.src}`}
          alt=""
          aria-hidden
          width={s.w}
          height={s.h}
          className={`pointer-events-none absolute h-auto select-none ${s.pos}`}
          style={{
            width: `clamp(${s.mobileW || s.w}px, 8vw, ${s.w}px)`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-[720px] px-4 md:px-8">
        <h2 className="font-heading text-[24px] font-semibold leading-[1.3] md:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-4 text-body-s text-white/80 md:text-body-m">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button className="mt-8 cursor-pointer rounded-full bg-secondary-500 px-6 py-3 text-body-s font-medium text-neutral-950 transition-colors hover:bg-secondary-400">
          Join as Creator
        </button>
      </div>
    </section>
  );
}