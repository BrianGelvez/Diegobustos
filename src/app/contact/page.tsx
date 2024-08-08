import Contact from "@/components/contact";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contacto - Diego Bustos, Abogado Penalista en Córdoba",
  description: "Ponte en contacto con Diego Bustos, abogado penalista en Córdoba. Agenda una reunión, conoce la dirección de nuestro estudio jurídico y encuentra nuestros datos de contacto. Estamos aquí para ayudarte con tus necesidades legales.",
  keywords: "contacto, Diego Bustos, abogado penalista, Córdoba, agendar reunión, dirección jurídica, datos de contacto",
  openGraph: {
    title: "Contacto - Diego Bustos, Abogado Penalista en Córdoba",
    description: "Ponte en contacto con Diego Bustos, abogado penalista en Córdoba. Agenda una reunión, conoce la dirección de nuestro estudio jurídico y encuentra nuestros datos de contacto. Estamos aquí para ayudarte con tus necesidades legales.",
    url: "https://diegobustos.vercel.app/contact",
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
    title: "Contacto - Diego Bustos, Abogado Penalista en Córdoba",
    description: "Ponte en contacto con Diego Bustos, abogado penalista en Córdoba. Agenda una reunión, conoce la dirección de nuestro estudio jurídico y encuentra nuestros datos de contacto. Estamos aquí para ayudarte con tus necesidades legales.",
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


export default function ContactPage() {

  return (
    <Contact/>
  );
}
