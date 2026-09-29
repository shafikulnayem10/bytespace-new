import Image from "next/image";

const pieces = [
  {
    src: "/images/auth/course-card-asset.png",
    width: 746,
    height: 768,
    className: "left-[6.54%] top-[16.25%] w-[71.73%] z-10",
  },
  {
    src: "/images/auth/course-card-data.png",
    width: 746,
    height: 768,
    className: "left-[27.88%] top-0 w-[71.73%] z-20",
  },
  {
    src: "/images/auth/ring.png",
    width: 296,
    height: 294,
    className: "left-[12.12%] top-[3.75%] w-[28.46%] z-30",
  },
  {
    src: "/images/auth/cone.png",
    width: 380,
    height: 378,
    className: "left-[1.15%] top-[69.4%] w-[36.54%] z-30",
  },
  {
    src: "/images/auth/squiggle.png",
    width: 354,
    height: 352,
    className: "left-[72.5%] top-[55.7%] w-[34.04%] z-31",
  },
  {
    src: "/images/auth/happy-students.png",
    width: 516,
    height: 246,
    className: "left-[49.6%] top-[77.5%] w-[49.6%] z-30",
  },
];

export default function AuthIllustration({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`relative aspect-[520/560] w-full max-w-[520px] select-none ${className}`}
    >
      {pieces.map((piece) => (
        <Image
          key={piece.src}
          src={piece.src}
          alt=""
          width={piece.width}
          height={piece.height}
          sizes="(min-width: 1024px) 380px, 0px"
          className={`absolute h-auto ${piece.className}`}
        />
      ))}
    </div>
  );
}
