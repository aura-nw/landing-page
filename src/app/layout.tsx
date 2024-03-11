import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import Script from "next/script";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tutorials from "../sections/tutorials";
import "./globals.css";

const ppmori = localFont({ src: './../assets/fonts/PPMori-SemiBold.otf', variable: "--font-ppmori-semibold", })
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aura Network - The Layer 1 for emerging countries",
  description: "Aura Network is the Layer 1 for emerging countries, providing public infrastructure through modular tech stacks. Build and drive Blockchain mass adoption.",
  openGraph: {
    images: 'https://aura.network/img_thumb.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K3NWXQS');`,
        }}
      />
      <body className={`${inter.className} ${ppmori.variable} scroll-smooth`}>
        <div>
          <input className="nav-input hidden" type="checkbox" id="nav-input" />
          <Header />
          {children}
          <Tutorials />
          <Footer />
          <label htmlFor="nav-input" className="nav-overlay"> </label>
        </div>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3NWXQS"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
