import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Argan Portfolio | Developer | Gamer | Streamer | Editor",
  description: "Portfolio website showcasing development, gaming, streaming, and editing skills",
  icons: {
    icon: [
      { 
        rel: "icon",
        url: "/favicon.ico",
        sizes: "any" 
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-[#0f172a] text-white`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
