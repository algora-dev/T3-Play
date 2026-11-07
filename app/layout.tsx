import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-rajdhani" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.t3play.com"),
  title: {
    default: "T3 Play | Web3 Gaming",
    template: "%s | T3 Play",
  },
  description:
    "T3 Play is a web3 media studio growing an ecosystem of games, creators, communities and web3 IP. Home of $TBAG, the global gaming culture coin, and the party shooter Poly Gunnerz.",
  openGraph: {
    siteName: "T3 Play",
    type: "website",
    images: ["/media/images/2820d9b2d074a66e.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="bg-bg font-body text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
