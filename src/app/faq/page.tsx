import Faq from "@/components/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - Diego Bustos, Abogado Penalista en Córdoba",
  description:
    "Encuentra respuestas a las preguntas más frecuentes sobre el derecho penal y cómo Diego Bustos, abogado penalista en Córdoba, puede asistirte. Conoce más sobre los servicios, el proceso penal y tus derechos legales.",
  keywords:
    "preguntas frecuentes, Diego Bustos, abogado penalista, Córdoba, derecho penal, asesoramiento legal, proceso penal",
  openGraph: {
    title: "Preguntas Frecuentes - Diego Bustos, Abogado Penalista en Córdoba",
    description:
      "Encuentra respuestas a las preguntas más frecuentes sobre el derecho penal y cómo Diego Bustos, abogado penalista en Córdoba, puede asistirte. Conoce más sobre los servicios, el proceso penal y tus derechos legales.",
    url: "https://diegobustos.vercel.app/faq",
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
    title: "Preguntas Frecuentes - Diego Bustos, Abogado Penalista en Córdoba",
    description:
      "Encuentra respuestas a las preguntas más frecuentes sobre el derecho penal y cómo Diego Bustos, abogado penalista en Córdoba, puede asistirte. Conoce más sobre los servicios, el proceso penal y tus derechos legales.",
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

export default function FaqPage() {
  return <Faq />;
}
