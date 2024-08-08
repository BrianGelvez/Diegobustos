import { Metadata } from "next";
import Main from "@/sections/main";
import AboutMe from "@/sections/aboutMe";
import Form from "@/sections/form";

export const metadata: Metadata = {
  title: "Diego Bustos - Abogado Penalista en Córdoba",
  description: "Diego Bustos, abogado penalista en Córdoba, especializado en la restitución de motos y defensas penales. Ofrecemos servicios rápidos y eficientes para tus necesidades legales.",
  keywords: "abogado penalista, restitución de motos, Córdoba, defensas penales, abogados en Córdoba",
  openGraph: {
    title: "Diego Bustos - Abogado Penalista en Córdoba",
    description: "Diego Bustos, abogado penalista en Córdoba, especializado en la restitución de motos y defensas penales. Ofrecemos servicios rápidos y eficientes para tus necesidades legales.",
    url: "https://diegobustos.vercel.app",
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
    title: "Diego Bustos - Abogado Penalista en Córdoba",
    description: "Diego Bustos, abogado penalista en Córdoba, especializado en la restitución de motos y defensas penales. Ofrecemos servicios rápidos y eficientes para tus necesidades legales.",
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

export default function Home() {
  return (
    <div>
      <Main/>
      <AboutMe/>
      <Form/>
    </div>
  );
}
