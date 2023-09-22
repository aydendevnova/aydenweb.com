import "~/styles/globals.css";
import { Inter, Montserrat } from "next/font/google";
import Header from "~/components/layout/header";
import NoSSR from "react-no-ssr";

export const metadata = {
  title: "Ayden's Portfolio",
  description: "Portfolio Website",
};

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
      <body>
        <Header />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
