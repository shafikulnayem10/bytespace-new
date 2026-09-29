import Image from "next/image";
import Link from "next/link";
import AuthIllustration from "./AuthIllustration";

const gridStyle = {
  backgroundImage: "url(/images/auth/grid-tile.png)",
  backgroundSize: "120px 120px",
};

export default function AuthLayout({ heading, description, children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0038ff]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={gridStyle}
      />

      <div className="relative mx-auto grid min-h-screen max-w-[1200px] items-center gap-12 px-4 py-10 md:px-8 lg:grid-cols-2 xl:px-0">
        <section className="flex flex-col gap-6 self-start lg:pt-6">
          <Link href="/" aria-label="ByteSpace home" className="w-fit">
            <Image
              src="/images/logo-icon.svg"
              alt="ByteSpace"
              width={29}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="max-w-[340px]">
            <h1 className="text-sm font-semibold text-white">{heading}</h1>
            <p className="mt-3 text-xs leading-relaxed text-white/80">
              {description}
            </p>
          </div>

          <AuthIllustration className="hidden lg:block" />
        </section>

        <section className="w-full max-w-[520px] justify-self-center lg:justify-self-end">
          {children}
        </section>
      </div>
    </main>
  );
}
