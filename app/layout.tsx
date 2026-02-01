import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ProClim972 - Climatisation et Énergies Renouvelables en Martinique",
    template: "%s | ProClim972",
  },
  description:
    "ProClim972, spécialiste de la climatisation, panneaux photovoltaïques et chauffe-eau thermodynamiques en Martinique, Guadeloupe et Guyane. Plus de 45 ans d'expertise.",
  keywords: [
    "climatisation",
    "Martinique",
    "photovoltaïque",
    "chauffe-eau thermodynamique",
    "HVAC",
    "génie climatique",
    "Guadeloupe",
    "Guyane",
    "énergies renouvelables",
  ],
  authors: [{ name: "ProClim972" }],
  creator: "nerdyweb.fr",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://proclim972.fr",
    siteName: "ProClim972",
    title: "ProClim972 - Climatisation et Énergies Renouvelables en Martinique",
    description:
      "Spécialiste de la climatisation et des énergies renouvelables en Martinique, Guadeloupe et Guyane depuis plus de 45 ans.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
