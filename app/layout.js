import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "./ui/navbar";
import { BackToTopButton } from "./ui/backToTopButton";

import { Aleo } from "next/font/google";
const aleo = Aleo({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - Augusto Moraes",
    default: "Augusto Moraes",
  },
  description: "Portfólio e informações deste cujo nome a página intitula.",
  metadataBase: new URL("https://www.augustooomoraes.com/"),
  openGraph: {
    url: 'https://www.augustooomoraes.com',
    type: 'website',
    title: 'Augusto Moraes',
    description: 'Portfólio e informações deste cujo nome a página intitula.',
    images: [
      {
        url: 'https://www.augustooomoraes.com/opengraph-image.png?199e65cd9697fbf2',
        width: 800,
        height: 600,
        alt: 'Augusto Moraes OpenGraph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    domain: 'augustooomoraes.com',
    url: 'https://www.augustooomoraes.com',
    title: 'Augusto Moraes',
    description: 'Portfólio e informações deste cujo nome a página intitula.',
    image: 'https://www.augustooomoraes.com/opengraph-image.png?199e65cd9697fbf2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={aleo.className}>
        <BackToTopButton />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
