import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaviconSwitcher } from "./FaviconSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angèle Delorme — Portfolio Design",
  description:
    "Portfolio de design d'espace, scénographie et conception d'objets par Angèle Delorme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className="antialiased font-sans bg-background text-foreground">
        <FaviconSwitcher />
        {children}
      </body>
    </html>
  );
}
