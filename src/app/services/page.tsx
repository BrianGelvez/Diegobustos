import Services from "@/components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Diego Bustos - Abogado Penalista en Córdoba",
  description: "Descubre los servicios legales especializados ofrecidos por Diego Bustos, abogado penalista en Córdoba. Ofrecemos defensa penal confiable, asesoramiento en derecho civil y más, con un enfoque comprometido y profesional.",
  keywords: "servicios legales, Diego Bustos, abogado penalista, Córdoba, defensa penal, asesoramiento legal, derecho civil",
  openGraph: {
    title: "Servicios de Diego Bustos - Abogado Penalista en Córdoba",
    description: "Descubre los servicios legales especializados ofrecidos por Diego Bustos, abogado penalista en Córdoba. Ofrecemos defensa penal confiable, asesoramiento en derecho civil y más, con un enfoque comprometido y profesional.",
    url: "https://diegobustos.vercel.app/services",
    images: [
      {
        url: "https://diegobustos.vercel.app/logopng.png",
        width: 1200,
        height: 630
      }
    ],
    type: "website",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Diego Bustos - Abogado Penalista en Córdoba",
    description: "Descubre los servicios legales especializados ofrecidos por Diego Bustos, abogado penalista en Córdoba. Ofrecemos defensa penal confiable, asesoramiento en derecho civil y más, con un enfoque comprometido y profesional.",
    images: [
      {
        url: "https://diegobustos.vercel.app/logopng.png",
        width: 1200,
        height: 630
      }
    ],
    site: "@tucuenta",
    creator: "@tucuenta"
  }
};

export default function ServicesPage() {

  return (
    <Services/>
  );
}
