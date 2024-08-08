import Testimonies from "@/components/testimonies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios de Diego Bustos - Abogado Penalista en Córdoba",
  description:
    "Lee los testimonios de nuestros clientes y descubre cómo Diego Bustos, abogado penalista en Córdoba, ha ayudado a resolver sus casos con éxito. Conoce la opinión de quienes confiaron en nuestros servicios legales.",
  keywords:
    "testimonios, Diego Bustos, abogado penalista, Córdoba, opiniones de clientes, defensa penal",
  openGraph: {
    title: "Testimonios de Diego Bustos - Abogado Penalista en Córdoba",
    description:
      "Lee los testimonios de nuestros clientes y descubre cómo Diego Bustos, abogado penalista en Córdoba, ha ayudado a resolver sus casos con éxito. Conoce la opinión de quienes confiaron en nuestros servicios legales.",
    url: "https://diegobustos.vercel.app/testimonies",
    images: [
      {
        url: "https://diegobustos.vercel.app/logopng.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonios de Diego Bustos - Abogado Penalista en Córdoba",
    description:
      "Lee los testimonios de nuestros clientes y descubre cómo Diego Bustos, abogado penalista en Córdoba, ha ayudado a resolver sus casos con éxito. Conoce la opinión de quienes confiaron en nuestros servicios legales.",
    images: [
      {
        url: "https://diegobustos.vercel.app/logopng.png",
        width: 1200,
        height: 630,
      },
    ],
    site: "@tucuenta",
    creator: "@tucuenta",
  },
};

export default function TestimoniesPage() {
  return <Testimonies />;
}
