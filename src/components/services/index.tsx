"use client";

import Image from "next/image";
import { approach, services } from "./services.data";

export default function Services() {

  return (
    <div className="mt-24 px-4">
      <Image
        src="/fondo.png"
        alt="fondo"
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
          alt="balance"
          className="lg:w-12"
        />
      </div>
      <div className="">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Mis Servicios</h2>
        </div>
        <div className="border py-4 border-x-black border-golden-secundary">
          <h2 className="text-center text-lg">TU DEFENSA PENAL CONFIABLE</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-center items-start gap-2 
               lg:gap-3 border-[1px] border-[#242424] backdrop-blur-lg bg-black/10 
               bg-gradient-to-tl from-golden-primary/20 via-transparent p-4 rounded-xl transform transition-transform duration-300 hover:scale-105"
            >
              {index === 0 && (
                <div className="w-full flex justify-center">
                  <Image
                    src={service.image || ""}
                    alt="estrellas"
                    width={110}
                    height={110}
                  />
                </div>
              )}
              <span className="flex flex-row justify-center items-center gap-2">
                <span>{service.icon}</span>
                <h3 className="text-2xl font-semibold text-gray-200">
                  {service.title}
                </h3>
              </span>

              <span className="text-lg">{service.description}</span>
              <a
                href="/#contacto"
                className="py-2 px-4 bg-golden-secundary bg-gradient-to-tl 
                    via-golden-primary from-golden-accent2 text-black rounded-md transform transition-transform duration-300 hover:scale-105"
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-8">
        <span className="w-full h-[1px] bg-golden-secundary" />
      </div>
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <h2 className="text-center text-3xl gradient-text font-extrabold">
          Nuestro Enfoque
        </h2>
        <p className="text-center text-lg">
          En nuestro estudio jurídico, abrazamos una filosofía única y
          comprometida con la excelencia en la defensa legal.
        </p>
        <p className="text-center text-lg">
          Nuestro enfoque se basa en tres pilares fundamentales que nos permiten
          brindar a nuestros clientes una representación legal inigualable,
          enfrentando cada caso con creatividad, minuciosidad y valentía.
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:gap-12 justify-center items-center">
        {approach.map((ele, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 my-12 justify-center items-center transform 
                 transition-transform duration-500 hover:-translate-y-2"
          >
            <Image
              src={ele.image}
              alt="approbach"
              width={230}
              height={500}
              className="h-64 rounded-xl w-full"
            />
            <p className="text-center text-2xl underline">{ele.title}</p>
            <p className="text-center">{ele.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full pb-8 flex justify-center items-center">
        <button className="w-full lg:w-[50%] py-2 px-4 bg-golden-secundary bg-gradient-to-tl via-golden-primary from-golden-accent2 text-white rounded-md">
          Testimonios
        </button>
      </div>
    </div>
  );
}
