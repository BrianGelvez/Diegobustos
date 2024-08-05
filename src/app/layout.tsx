import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servicios Legales en Córdoba - Abogado Penalista",
  description:
    "Especializados en restitución de motos, defensas penales, accidentes de tránsito, y más. Tu abogado de confianza en Córdoba.",
  // Las propiedades adicionales no compatibles deben omitirse
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="abogado, abogado penalista, Córdoba, restitución de motos, defensas penales, accidentes de tránsito, ART, divorcios"
        />
        <meta name="author" content="Diego Bustos" />
        <meta
          property="og:title"
          content="Servicios Legales en Córdoba - Abogado Penalista"
        />
        <meta
          property="og:description"
          content="Especializados en restitución de motos, defensas penales, accidentes de tránsito, y más. Tu abogado de confianza en Córdoba."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diegobustos.vercel.app/" />
        <meta property="og:image" content="https://diegobustos.vercel.app/logo.webp" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Servicios Legales en Córdoba - Abogado Penalista"
        />
        <meta
          name="twitter:description"
          content="Especializados en restitución de motos, defensas penales, accidentes de tránsito, y más. Tu abogado de confianza en Córdoba."
        />
        <meta name="twitter:image" content="https://diegobustos.vercel.app/logo.webp" />
        <meta name="twitter:site" content="@tucuenta" />
        <meta name="twitter:creator" content="@tucuenta" />
        <link rel="icon" href="/logo.webp" />
        <title>Abogado Penalista - Servicios Legales en Córdoba</title>
      </head>
      <body className={merriweather.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
