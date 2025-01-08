import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteName = "RegexBot";
const title = `${siteName} - Free AI Regular Expression Builder`;
const description =
  "Generate RegEx patterns using Artificial Intelligence. Easily convert plain english into regular expressions with the help of AI.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://regexbot.xyz",
    siteName,
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://regexbot.xyz",
    languages: {
      "en-US": "https://regexbot.xyz",
    },
  },
};

type RootLayoutProps = PropsWithChildren;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" data-theme="night">
    <Script
      id="jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          url: "https://regexbot.xyz",
          name: siteName,
          description,
        }),
      }}
      key="jsonld"
    />
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
