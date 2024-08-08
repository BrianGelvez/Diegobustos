import Image from "next/image";
import { dataImage } from "../../components/aboutMe/image.data";
import { Metadata } from "next";
import AboutMe from "@/components/aboutMe";

export const metadata: Metadata = {
  title: "Sobre Diego Bustos - Abogado Penalista en Córdoba",
  description: "Conoce a Diego Bustos, abogado penalista en Córdoba, con más de 4 años de experiencia en derecho penal y civil. Formado en la Universidad Nacional de Córdoba, comprometido a defender tus derechos con profesionalismo y dedicación.",
  keywords: "Diego Bustos, abogado penalista, Córdoba, derecho penal, derecho civil, experiencia legal",
  openGraph: {
    title: "Sobre Diego Bustos - Abogado Penalista en Córdoba",
    description: "Conoce a Diego Bustos, abogado penalista en Córdoba, con más de 4 años de experiencia en derecho penal y civil. Formado en la Universidad Nacional de Córdoba, comprometido a defender tus derechos con profesionalismo y dedicación.",
    url: "https://diegobustos.vercel.app/aboutMe",
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
    title: "Sobre Diego Bustos - Abogado Penalista en Córdoba",
    description: "Conoce a Diego Bustos, abogado penalista en Córdoba, con más de 4 años de experiencia en derecho penal y civil. Formado en la Universidad Nacional de Córdoba, comprometido a defender tus derechos con profesionalismo y dedicación.",
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

export default function AboutMePage() {
  return (
    <AboutMe/>
  );
}
