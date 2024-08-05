import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RegexBot: A Regex Builder powered by AI",
  description:
    "Convert natural language into regular expressions and vice versa",
};

type RootLayoutProps = PropsWithChildren;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" data-theme="night">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
