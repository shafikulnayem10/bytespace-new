import Image from "next/image";

export default function BrandLogos() {
  return (
    <section className="bg-neutral-50 py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 xl:px-0">
        <div className="flex items-center justify-center">
          <Image
            src="/images/logos.svg"
            alt="Partner Brands"
            width={1200}
            height={80}
            className="h-auto w-full max-w-[1050px] object-contain opacity-85"
          />
        </div>
      </div>
    </section>
  );
}