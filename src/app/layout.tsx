import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RegexBot: A Regex Builder powered by AI",
  description: "Convert natural language into regular expressions",
};

type RootLayoutProps = PropsWithChildren;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" data-theme="night">
    <body className={inter.className}>
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
