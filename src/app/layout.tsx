// src/app/layout.tsx
import { ReactNode } from "react";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Lyfeman - Apps útiles para tu vida",
  description: "Aplicaciones web gratuitas: ACMAN para finanzas, AI Review Scorer y más herramientas útiles",
  verification: {
    google: "ca-pub-5145520648111228"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="google-adsense-account" content="ca-pub-5145520648111228" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5145520648111228"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}