import Image from "next/image";
import { BsChatText } from "react-icons/bs";
import { faqData } from "./faq.data";

export default function Faq() {
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
          <h2 className="text-4xl font-bold">Preguntas Frecuentes</h2>
        </div>
        <div className="border py-4 border-x-black border-golden-secundary">
          <h2 className="text-center text-lg">
            Conoce las preguntas más frecuentes
          </h2>
        </div>
      </div>
      <div className="w-full lg:w-[80%] lg:mx-auto flex flex-col gap-5 justify-center items-center my-5">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="w-full h-auto border flex flex-col rounded-xl backdrop-blur-sm bg-black/70"
          >
            <label htmlFor={`faq-${index}`}>
              <div className="flex flex-row justify-start items-center gap-2 p-2 rounded-xl">
                <span>
                  <BsChatText className="text-golden-accent3" size={30} />
                </span>
                <p className="text-slate-300">{faq.questions}</p>
              </div>
            </label>
            <input
              id={`faq-${index}`}
              name={`faq-${index}`}
              type="checkbox"
              placeholder="faq"
              className="peer/faq hidden"
            />
            <div
              className="w-full max-h-0 rounded-5 z-10 peer-checked/faq:py-2 peer-checked/faq:max-h-96
                   transition-all duration-700 pl-5 pr-2
                   overflow-hidden"
            >
              <p className="">{faq.answers}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full py-8 flex justify-center items-center">
        <a
          href="/contact"
          className="inline-block text-center w-full lg:w-[80%] py-2 px-4 bg-golden-secundary bg-gradient-to-tl via-golden-primary from-golden-accent2 text-white rounded-md"
        >
          Agenda una reunion 1:1
        </a>
      </div>
    </div>
  );
}
