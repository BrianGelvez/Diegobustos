"use client";

import Image from "next/image";
import { dataTestimonies } from "./testimonies.data";

export default function Testimonies() {
  return (
    <div className="mt-24 px-4 lg:px-10 xl:px-0 xl:w-container xl:mx-auto xl:justify-center xl:items-center">
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
          <h2 className="text-4xl font-bold">Testimonios</h2>
        </div>
        <div className="border py-4 border-x-black border-golden-secundary">
          <h2 className="text-center text-2xl">
            ¿Qué dicen nuestros clientes?
          </h2>
        </div>
      </div>
      <div className="w-full my-8 flex flex-col">
        <div>
          <p className="text-center my-1 text-lg">
            Queremos compartir contigo algunas de las valiosas palabras que
            nuestros clientes han tenido la amabilidad de dedicarnos.
          </p>
          <p className="text-center my-1 text-lg">
            Su satisfacción y confianza son nuestro mayor logro, y estamos
            orgullosos de poder representarlos en sus asuntos legales.{" "}
          </p>
          <p className="text-center my-8 text-lg">
            Para preservar la privacidad de nuestros clientes y respetar la
            confidencialidad de cada caso, todos los testimonios son anónimos.
            Aquí hay algunos testimonios que reflejan la experiencia de trabajar
            con nuestro equipo de abogados penalistas.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          {dataTestimonies.map((ele, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-y-5 justify-start items-start p-5 rounded-xl border backdrop-blur-lg bg-black/10 transform transition-transform duration-300 hover:scale-95"
            >
              <div className="w-full flex flex-row justify-between items-start">
                <Image
                  src={ele.image}
                  alt="testimonio1"
                  width={100}
                  height={100}
                />
                <Image
                  src="/logo.webp"
                  alt="testimonio1"
                  width={40}
                  height={40}
                />
              </div>

              <p>{ele.description}</p>
              <p>{ele.name}</p>
              <div className="w-full flex flex-row justify-between items-center">
                <p className="gradient-text">{ele.city}</p>
                <p className="gradient-text">{ele.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 my-12">
          <a href="/services" className="text-center w-full lg:w-[40%] py-2 px-4 bg-golden-secundary bg-gradient-to-tl via-golden-primary from-golden-accent2 text-white rounded-md">Volver a mis servicios</a>
          <a href="/faq" className="text-center w-full lg:w-[40%] py-2 px-4 bg-golden-secundary bg-gradient-to-tl via-golden-primary from-golden-accent2 text-white rounded-md">Preguntas Frecuentes</a>
        </div>
      </div>
    </div>
  );
}
