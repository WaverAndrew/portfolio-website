import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrea Bonarrigo - Software Engineer & Entrepreneur",
  description:
    "Hi! I am a 20 years old student living in Milan, Italy with a burning passion for startups and technology, currently pursuing a BSc in Economics & Management at Bocconi University. What drives me? I started coding at 11 and quickly became passionate about bringing my ideas to life. With each project, I realized my love for startups and that's what I aspire to pursue. Outside of work, I enjoy tennis, snowboarding, and reading.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8 pb-32">
          {children}
        </main>
        <Navbar />
      </body>
    </html>
  );
}
