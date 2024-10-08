"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function Main() {
  return (
    <div className="relative flex flex-col h-screen">
      <Image
        src="/fondodeinicio.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        className="lg:hidden"
      />
      <Image
        src="/fondodesktop.webp"
        alt="Imagen de fondo de inicio para escritorio"
        layout="fill"
        objectFit="cover"
        className="hidden lg:block"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="absolute inset-0 bg-black/60 flex flex-col xl:items-center">
          <div className="relative xl:w-container xl:justify-center px-6 lg:px-10 xl:px-0 flex flex-col items-start mt-top-layout lg:w-[70%]">
            <div className="flex flex-row">
              <div className="flex flex-col items-start">
                <h1 className="gradient-text text-2xl lg:text-4xl">
                  Diego Bustos
                </h1>
                <h2 className="text-sm lg:text-2xl">Abogado Penalista</h2>
              </div>
              <Image
                src="/balance.webp"
                width={55}
                height={55}
                alt="Imagen de una balanza, símbolo de justicia"
                className="lg:w-20"
              />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mt-7">
            Restitución de Motos en Córdoba
            </h1>
            <p className="text-lg lg:text-2xl mt-3">
              Especialista en la recuperación de vehiculos, brindando un servicio
              rápido y eficiente.
            </p>
            <a
              href="/#contacto"
              className="w-[50%] lg:w-80 text-black mt-2 text-center font-semibold bg-golden-primary bg-gradient-to-tl from-golden-secundary via-golden-primary border-solid border-2 border-[#a9b3c9] rounded-lg p-1 shadow-lg shadow-yellow-500/50"
            >
              Consulta
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-black opacity-50 flex justify-center items-center">
          <Link href="#aboutme">
            <FaArrowDown size={36} className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
