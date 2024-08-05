import Image from "next/image";

export default function Blog() {
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
            <h2 className="text-4xl font-bold">Blog Semanal del abogado</h2>
          </div>
          <div className="border py-4 border-x-black border-golden-secundary">
            <h2 className="text-center text-lg">TU DEFENSA PENAL CONFIABLE</h2>
          </div>
        </div>
      </div>
    )
}