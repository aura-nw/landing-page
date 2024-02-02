import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import Tutorials from "../sections/tutorials";
import Script from "next/script";

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
          <Header />
          {children}
          <Tutorials />
          <Footer />
        </div>
        <Script id="scrollspy">
          {`const navLinkEls = document.querySelectorAll('.content_link')
            const sectionEls = document.querySelectorAll('.section')
            let currentSection = 'introduction'
            function extractStringAfterHash(inputUrl) {
              const hashIndex = inputUrl.indexOf('#');
              if (hashIndex === -1) {
                  return inputUrl;
              }
              const result = inputUrl.substring(hashIndex + 1);
              return result;
              }
            window.addEventListener('scroll', () => {
            sectionEls.forEach(sectionEl => {
              if(window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 5)) {
                 currentSection = sectionEl.id
              }
            })
            navLinkEls.forEach(navEl => {
              if(extractStringAfterHash(navEl.href) === currentSection) {
                document.querySelector('.active')?.classList.remove('active');
                navEl.classList.add('active')
              }
            })
          })`}
        </Script>
      </body>
    </html>
  );
}
