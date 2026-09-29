import Image from "next/image";
import Link from "next/link";
import { Copyright } from "lucide-react";

const links1 = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
];

const links2 = [
  "Development",
  "Marketing",
  "Photography",
  "Finance",
  "Sport",
];

const links3 = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

const legalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookies Settings",
];

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto max-w-[1200px] px-6">

       
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

         
          <div className="w-full max-w-[420px]">

            <div className="flex items-center gap-1">
              <Link href="/">
                <Image
                  src="/images/only_logo.png"
                  alt="ByteSpace"
                  width={20}
                  height={20}
                />
              </Link>

             <p className="font-heading text-[20px] font-bold text-black">
                  ByteSpace
             </p>
            </div>

            <p className="mt-3 text-[10px] text-gray-600">
              Stay up to date with our latest features and releases by
              joining our newsletter.
            </p>

            
            <div className="mt-6 flex items-center gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="h-9 w-[250px] rounded-full border border-gray-300 px-4 text-[10px] outline-none"
              />

              <button className="h-9 rounded-full bg-[#d6f250] px-5 text-[10px] font-semibold">
                Search
              </button>

            </div>

            <p className="mt-4 max-w-[350px] text-[9px] leading-4 text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent
              to receive updates from our company.
            </p>

          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-12 md:gap-16">

            <ul className="space-y-3">
              {links1.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[10px] text-gray-600 hover:text-black"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {links2.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[10px] text-gray-600 hover:text-black"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {links3.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[10px] text-gray-600 hover:text-black"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 pt-5 md:flex-row md:items-center md:justify-between">

          <p className="flex items-center gap-1 text-[9px] text-gray-600">
            <Copyright size={10} />
            2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-[9px] text-gray-600 hover:text-black"
              >
                {link}
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}