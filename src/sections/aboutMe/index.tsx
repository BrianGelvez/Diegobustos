"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="mx-3 lg:mx-6 py-4 mb-20 flex flex-col lg:flex-row gap-20"
    >
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-center gap-2 lg:gap-8 border-[1px] border-[#202020] bg-gradient-to-tl from-golden-primary/20 via-transparent p-4 rounded-lg">
        {/* <h1 className="text-4xl text-center">Sobre mi</h1> */}
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
          <p className="text-xl text-gray-300 mb-4">
            Hola! Soy Diego Bustos, soy{" "}
            <span className="gradient-text">abogado penalista</span> con 5+ años
            de experiencia.
          </p>
          <p className="text-xl text-gray-300 mb-4">
            Con más de 5+ de experiencia, estoy comprometido a defender tus
            derechos con dedicación y profesionalismo.
          </p>
          <p className="text-xl text-gray-300 mb-4">
            Graduado de la Universidad de Córdoba con especialización en derecho
            penal y civil, ha trabajado en más de{" "}
            <span className="gradient-text">50 casos exitosos</span>.
          </p>
          <p className="text-xl text-gray-300 mb-4">
            Creemos en las leyes, la transparencia y el compromiso con cada uno
            de nuestros clientes.
          </p>
          <p className="text-lg text-gray-300">
            Nuestro <span className="gradient-text">objetivo</span> es brindarte
            la mejor defensa posible y asegurarnos de que tus derechos sean
            siempre protegidos.
          </p>
        </div>
        <div className="w-auto flex flex-row justify-center gap-14 md:gap20 lg:gap-36 items-center">
          <Image
            src="/firma.webp"
            alt="firmadeabogado"
            width={130}
            height={130}
          />
          <Image
            src="/matriculadeabogado.webp"
            alt="matriculaabogado"
            width={130}
            height={130}
          />
        </div>
      </div>
      <div className="lg:w-[50%] lg:flex lg:flex-col">
        <div className="mt-12 flex flex-col">
          <div className="flex flex-col">
            <span className="flex flex-row justify-center items-center gap-2">
              <p className="gradient-text text-[12px]">Servicio estrella</p>
              <Image
                src="/estrellas.webp"
                alt="tresestrellas"
                width={40}
                height={40}
              />
            </span>
            <a href="/#contacto" className="text-center py-2 px-4 bg-golden-secundary bg-gradient-to-tl via-golden-primary from-golden-accent2 text-white rounded-md">
              Restitucion de motos
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 my-12">
          <a href="/aboutMe" className="text-center mt-2 w-full font-extralight text-slate-200 border-2 border-golden-secundary rounded-lg p-1 shadow-lg shadow-yellow-500/50">
            Conoce mas sobre mi
          </a>
          <a href="/services" className="text-center mt-2 w-full font-extralight text-slate-200 border-2 border-golden-secundary rounded-lg p-1 shadow-lg shadow-yellow-500/50">
            Otros servicios
          </a>
        </div>
        <div className="">
          <h1 className="text-2xl gradient-text">Dirección Estudio Jurídico:</h1>
          <p className="text-xs mb-7">Barrio Centro de la ciudad de Córdoba Capital.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.153636666363!2d-64.19079422439285!3d-31.409892874264706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298793b38fc75%3A0x5dfe51bb4fd4c8e!2sLa%20Rioja%20441%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1722692377372!5m2!1ses!2sar"
            className="w-full h-[305px] rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
