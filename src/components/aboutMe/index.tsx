'use client'

import Image from "next/image";
import { dataImage } from "./image.data"; 

export default function AboutMe() {
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
      <h1 className="text-center text-4xl">Sobre Mi</h1>
      <div className="flex overflow-x-auto space-x-4 py-4">
        {dataImage.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 min-w-full lg:min-w-0 lg:w-72 justify-center h-80 flex flex-col items-center mb-4 lg:mb-0"
          >
            <div className="relative w-full h-64">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 shadow-full rounded-lg border-solid border-golden-secundary border-2"
              />
            </div>
            <p className="mt-2 text-center text-xl">{image.alt}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <span className="w-full h-[1px] bg-golden-secundary" />
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full lg:w-[50%] flex flex-col gap-4 pb-10">
          <p className="text-gray-400 lg:text-lg">
            Abogado penalista con formación académica y profesional en la
            Universidad Nacional de Cordoba.
          </p>
          <p className="text-gray-400 lg:text-lg">
            Realice mis estudios secundarios en el colegio Racing de cordoba
          </p>
          <p className="text-gray-400 lg:text-lg">
            Con más de 4 años de experiencia, estoy comprometido a defender tus
            derechos con dedicación y profesionalismo.
          </p>
          <p className="text-gray-400 lg:text-lg">
            Graduado de la Universidad de Córdoba con especialización en derecho
            penal y civil, ha trabajado en más de 200 casos exitosos.
          </p>
          <p className="text-gray-400 lg:text-lg">
            Creemos en la justicia, la transparencia y el compromiso con cada
            uno de nuestros clientes.
          </p>
          <p className="text-gray-400 lg:text-lg">
            Nuestro objetivo es brindarte la mejor defensa posible y asegurarnos
            de que tus derechos sean siempre protegidos.
          </p>
          <p className="text-gray-400">
            Nuestro objetivo es brindarte la mejor defensa posible y asegurarnos
            de que tus derechos sean siempre protegidos.
          </p>
        </div>
      </div>
      <div className="w-full pb-8">
        <button className="w-full font-extralight text-slate-200 border-2 border-golden-secundary rounded-lg p-1 shadow-lg shadow-yellow-500/50">
          ir a mis servicios
        </button>
      </div>
    </div>
  );
}
