"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/register" className="text-body-s hover:text-secondary-500">
            Join Us
          </Link>
          <button aria-label="Cart" className="cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
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
            <li><Link href="/register" className="text-body-m">Join Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}