"use client";
import "~/styles/globals.css";
import "aos/dist/aos.css";
import { Inter, Montserrat } from "next/font/google";
import Header from "~/components/layout/header";
import Script from "next/script";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import AOS from "aos";

import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: 'phone',
      duration: 400,
      easing: "ease-out-sine",
    });
  }, []);
  return (
    <html lang="en" className={`${inter.className} ${montserrat.className}`}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-46XMST9KKY"
      />
      <body>
        <main className="relative">{children}</main>
        <Header />
      </body>
    </html>
  );
}
