import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tutorials from "../sections/tutorials";
import "./globals.css";

const ppmori = localFont({ src: './../assets/fonts/PPMori-SemiBold.otf', variable: "--font-ppmori-semibold", })
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aura Network - The Layer 1 for emerging countries",
  description: "Aura Network is the Layer 1 for emerging countries, providing public infrastructure through modular tech stacks. Build and drive Blockchain mass adoption.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ppmori.variable} scroll-smooth`}>
        <div>
          <input className="nav-input hidden" type="checkbox" id="nav-input" />
          <Header />
          {children}
          <Tutorials />
          <Footer />
          <label htmlFor="nav-input" className="nav-overlay"> </label>
        </div>
      </body>
    </html>
  );
}
