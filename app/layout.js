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
  description: "Portfólio e informações sobre este cujo nome a página intitula.",
  openGraph: {
    title: "Augusto Moraes",
    description: "Portfólio e informações sobre este cujo nome a página intitula.",
    // url: "https://www.augustooomoraes.com/",
    url: "https://staging-augustooomoraes.vercel.app/",
    type: "website",
    image: "https://staging-augustooomoraes.vercel.app/_next/image?url=%2Fopengraph-image.png&w=640&q=75",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={aleo.className}>
        <BackToTopButton />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
