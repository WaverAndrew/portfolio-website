import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrea Bonarrigo - Startup Enthusiast & Software Engineer",
  description:
    "Hi! I am a 20 years old student living in Milan, Italy with a burning passion for startups and technology, currently pursuing a BSc in International Economics & Management at Bocconi University. I started coding at 11 and quickly became passionate about bringing my ideas to life. With each project, I realized my love for startups and that's what I aspire to pursue. Outside of work, I enjoy tennis, snowboarding, and reading.",
  keywords:
    "Software Engineer, Entrepreneur, Bocconi University, Milan, Technology, Startups, Web Development",
  authors: [{ name: "Andrea Bonarrigo" }],
  creator: "Andrea Bonarrigo",
  publisher: "Andrea Bonarrigo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andreabonarrigo.com",
    title: "Andrea Bonarrigo - Startup Enthusiast & Software Engineer",
    description:
      "Passionate software engineer and entrepreneur based in Milan, Italy. Currently pursuing a BSc in Economics & Management at Bocconi University.",
    siteName: "Andrea Bonarrigo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrea Bonarrigo - Startup Enthusiast & Software Engineer",
    description:
      "Passionate software engineer and entrepreneur based in Milan, Italy. Currently pursuing a BSc in Economics & Management at Bocconi University.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Andrea Bonarrigo",
              jobTitle: "Software Engineer & Entrepreneur",
              description:
                "Passionate software engineer and entrepreneur based in Milan, Italy. Currently pursuing a BSc in Economics & Management at Bocconi University.",
              url: "https://andreabonarrigo.com",
              sameAs: [
                "https://github.com/WaverAndrew",
                "https://linkedin.com/in/andreabonarrigo",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Bocconi University",
                description:
                  "Currently pursuing a BSc in Economics & Management",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Milan",
                addressCountry: "IT",
              },
            }),
          }}
        />
      </head>
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
