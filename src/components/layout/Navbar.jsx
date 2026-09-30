"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      <nav className="mx-auto flex h-[120px] w-[1440px] max-w-full items-center justify-between px-4 md:h-[80px] md:px-8">
        <Link href="/" aria-label="ByteSpace home">
          <Image src="/images/logo.svg" alt="ByteSpace" width={120} height={32} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l, i) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={`text-body-s transition-colors hover:text-secondary-500 ${
                  i === 0 ? "font-medium" : "font-normal"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/login" className="text-body-s hover:text-secondary-500">
            Sign In
          </Link>
          <Link href="/signup" className="text-body-s hover:text-secondary-500">
            Join Us
          </Link>
          <button aria-label="Cart" className="cursor-pointer">
            <ShoppingCart className="size-6" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="size-6" strokeWidth={2} />
          ) : (
            <Menu className="size-6" strokeWidth={2} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 rounded-2xl bg-primary-950 p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} onClick={() => setOpen(false)} className="text-body-m">
                  {l.label}
                </Link>
              </li>
            ))}
            <li><Link href="/login" className="text-body-m">Sign In</Link></li>
            <li><Link href="/signup" className="text-body-m">Join Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}