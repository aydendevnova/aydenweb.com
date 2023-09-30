import "~/styles/globals.css";
import "aos/dist/aos.css";
import { Inter, Montserrat } from "next/font/google";
import Header from "~/components/layout/header";
import Script from "next/script";
import LayoutClient from "./layoutClient";
import { env } from "~/env.mjs";

export const revalidate = env.NODE_ENV === "production" ? 3200 : 0;

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${montserrat.className}`}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-46XMST9KKY"
      />
      <Script id="googletag">{`function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-46XMST9KKY");`}</Script>
      <body>
        <LayoutClient>
          <main className="relative">{children}</main>
        </LayoutClient>

        <Header />
      </body>
    </html>
  );
}
