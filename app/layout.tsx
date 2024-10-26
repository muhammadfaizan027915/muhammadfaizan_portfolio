import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Faizan - Software Engineer",
  description: "Muhammad Faizan | Software Engineer | Full Stack Developer ",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="scroll-smooth">
        <head />
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </>
  );
}
