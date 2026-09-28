import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "ByteSpace | Online Courses",
  description: "Get access to hundreds of courses available on ByteSpace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
      <body className="font-body text-neutral-950 antialiased">{children}</body>
    </html>
  );
}