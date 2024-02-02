import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import Tutorials from "../sections/tutorials";

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
      <body className={`${inter.className} ${ppmori.variable}`}>
        <div>
          <Header />
          {children}
          <Tutorials />
          <Footer />
        </div>
      </body>
    </html>
  );
}
