import CalendlyWidget from "@/components/calendlyWidget";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const CalendlyWidget = dynamic(() => import("@/components/calendlyWidget"), {
    ssr: false,
  });

  return (
    <div className="mt-24 px-4 lg:px-10 xl:px-0 xl:w-container xl:mx-auto xl:justify-center xl:items-center">
      <Image
        src="/fondo.png"
        alt="Fondo de la página de Diego Bustos, abogado penalista"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-[-1]"
      />
      <div className="absolute inset-0 bg-black opacity-70 z-[-1]" />
      <div className="absolute top-0 left-0 w-full h-32 from-black to-transparent z-[-1]" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-[-1]" />
      <div className="flex flex-row mb-12">
        <div className="flex flex-col">
          <h1 className="gradient-text text-xl lg:text-xl">Diego Bustos</h1>
          <h2 className="text-xs lg:text-xs">Abogado Penalista</h2>
        </div>
        <Image
          src="/balance.webp"
          width={50}
          height={50}
          alt="Imagen de una balanza, símbolo de justicia"
          className="lg:w-12"
        />
      </div>
      <div className="">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Contacto</h2>
        </div>
        <div className="border py-4 border-x-black border-golden-secundary">
          <h2 className="text-center text-xl">TU DEFENSA PENAL CONFIABLE</h2>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-5">
        <span className="flex flex-row justify-center items-center gap-2">
          <p className="gradient-text text-[12px]">Servicio estrella</p>
          <Image
            src="/estrellas.webp"
            alt="tresestrellas"
            width={40}
            height={40}
          />
        </span>
        <a
          href="/#contacto"
          className="w-[50%] lg:w-80 text-black mt-2 text-center font-semibold bg-golden-primary bg-gradient-to-tl from-golden-secundary via-golden-primary border-solid border-2 border-[#a9b3c9] rounded-lg p-1 shadow-lg shadow-yellow-500/50"
        >
          restitución de moto
        </a>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 mt-2">
        <p className="text-center text-lg">
          Si estás enfrentando{" "}
          <span className="font-extrabold gradient-text">cargos penales</span> o
          necesitas asesoramiento legal en materia penal, no dudes en ponerte en
          contacto con nosotros.{" "}
        </p>
        <p className="text-center text-lg">
          Estamos aquí para ayudarte y proteger tus derechos.{" "}
        </p>
        <p className="text-center text-lg">
          En este calendario podrás agendar una reunión con nosotros! 👇
        </p>
        <p className="text-center text-lg">
          Elige el día y horario disponible y tendremos una reunión vía Google
          Meet o presencial si te encontrás cerca de nuestro estudio.
        </p>
      </div>
      <div className="py-4">
        <CalendlyWidget />
      </div>
      <div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-2xl gradient-text text-center">
            Dirección Estudio Jurídico:
          </h1>
          <p className="text-xs mb-4">
            Barrio Centro de la ciudad de Córdoba Capital.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.153636666363!2d-64.19079422439285!3d-31.409892874264706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298793b38fc75%3A0x5dfe51bb4fd4c8e!2sLa%20Rioja%20441%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1722692377372!5m2!1ses!2sar"
            className="w-full max-w-2xl h-[305px] rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <p>Contactanos</p>
          <span className="flex flex-row items-center">
            <FaLocationDot />
            <p>La Rioja 441. Cordoba Capital</p>
          </span>
          <span className="flex flex-row items-center">
            <FaPhoneAlt />
            <p>+ 54 351 3543254</p>
          </span>
        </div>
      </div>
    </div>
  );
}
