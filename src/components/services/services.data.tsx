"use client";
import { BsFillStoplightsFill } from "react-icons/bs";
import { FaHeartBroken } from "react-icons/fa";
import { GiSkullWithSyringe } from "react-icons/gi";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { TbDeviceDesktopExclamation } from "react-icons/tb";

export const services = [
  {
    title: "Restitución de Motos",
    description: (
      <p className="text-gray-400 mb-6">
        <span className="gradient-text font-bold">
          Nuestro servicio estrella.
        </span>{" "}
        Recuperamos tu moto de manera rápida y eficiente, asegurando que vuelvas
        a tener tu vehículo en el menor tiempo posible. Confía en nuestra
        experiencia y compromiso para resolver tu situación.
      </p>
    ),
    cta: "Retira tu moto HOY!",
    icon: <RiMotorbikeFill size={36} className="text-golden-accent3" />,
    image: "/estrellas.webp",
    link: "/#contacto"
  },
  {
    title: "Defensa Penal General",
    description: (
      <p className="text-gray-400 mb-6">
        Proporcionamos una defensa legal sólida y efectiva en casos penales.
        Nuestro objetivo es proteger tus derechos y garantizar que recibas un
        juicio justo. Conocemos a fondo el sistema judicial y estamos aquí para
        ayudarte.
      </p>
    ),
    cta: "Defiende tus Derechos",
    icon: <IoShieldCheckmark size={36} className="text-golden-accent3" />,
    link: "/contact"
  },
  {
    title: "Análisis de Riesgo del Trabajo (ART)",
    description: (
      <p className="text-gray-400 mb-6">
        Ofrecemos un análisis detallado de riesgos laborales para asegurar que
        tus derechos como trabajador sean respetados. Si has sufrido un
        accidente laboral, te ayudamos a obtener la compensación que mereces.
      </p>
    ),
    cta: "Protege tu Futuro",
    icon: <MdWorkHistory size={36} className="text-golden-accent3" />,
    link: "/contact"
  },
  {
    title: "Accidentes de Tránsito",
    description: (
      <p className="text-gray-400 mb-6">
        Especialistas en accidentes de tránsito. Te asistimos en cada paso del
        proceso legal para que obtengas la compensación adecuada. Nuestro
        compromiso es tu recuperación y bienestar.
      </p>
    ),
    cta: "Recupera tu Tranquilidad",
    icon: <BsFillStoplightsFill size={36} className="text-golden-accent3" />,
    link: "/contact"
  },
  {
    title: "Divorcios",
    description: (
      <p className="text-gray-400 mb-6">
        Te acompañamos en cada etapa del proceso de divorcio, asegurando que tus
        intereses sean protegidos. Nuestro enfoque es brindarte el apoyo legal
        necesario para alcanzar un acuerdo justo y equitativo.
      </p>
    ),
    cta: "Consulta Hoy",
    icon: <FaHeartBroken size={36} className="text-golden-accent3" />,
    link: "/contact"
  },
  {
    title: "Delitos relacionados con drogas",
    description: (
      <p className="text-gray-400 mb-6">
        Proporcionamos defensa legal especializada en casos de tráfico, cultivo
        o posesión de drogas ilícitas. Nuestro equipo de abogados expertos se
        encargará de proteger tus derechos y garantizar que recibas un juicio
        justo. Estamos aquí para ayudarte a enfrentar estas situaciones
        difíciles con el mejor respaldo legal posible.
      </p>
    ),
    cta: "Consulta Hoy",
    icon: <GiSkullWithSyringe size={36} className="text-golden-accent3" />,
    link: "/contact"
  },
  {
    title: "Delitos informáticos",
    description: (
      <p className="text-gray-400 mb-6">
        Asesoramiento y defensa en casos de ciberdelitos, como hacking,
        phishing, fraude informático, entre otros delitos cometidos a través de
        medios electrónicos.
      </p>
    ),
    cta: "Consulta Hoy",
    icon: <TbDeviceDesktopExclamation size={36} className="text-golden-accent3" />,
    link: "/contact"
  },
];

export const approach = [
  {
    image: "/innovacion.webp",
    title: "Innovación",
    description:
      "Reinventamos estrategias legales con soluciones creativas y vanguardistas para cada caso.",
  },
  {
    image: "/indagacion.webp",
    title: "Indagación",
    description:
      "Investigamos a fondo cada detalle, buscando la verdad para construir una defensa sólida.",
  },
  {
    image: "/decision.webp",
    title: "Decisión",
    description:
      "Actuamos con determinación y firmeza, tomando decisiones audaces para proteger tus derechos.",
  },
];
