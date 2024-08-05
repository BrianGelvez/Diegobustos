import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaLink } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail, SiInstagram } from "react-icons/si";

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div className="relative w-full flex flex-col gap-7">
      <Image
        src="/fondo.png"
        alt="cargando"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-[-1]"
      />
      <div className="absolute inset-0 bg-black opacity-0 z-[-1]"></div>
      {/* <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#111827] to-transparent z-[-1]"></div> */}
      <div className="w-full flex flex-col justify-center items-center py-2 gap-2 shadow-full backdrop-blur-lg bg-black/10">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <p className="text-lg">Redes Sociales</p>
          <div
            className="w-full flex flex-row justify-center items-center gap-5
               rounded-xl"
          >
            <a href="https://www.instagram.com/brian.gelvez/" target="_blank" rel="noopener noreferrer">
              <SiInstagram size={20} className="hover:text-golden-primary" />
            </a>
            <a href="https://wa.me/3521539991" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp size={20} className="hover:text-golden-primary" />
            </a>
            <a href="mailto:briannn97@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail size={20} className="hover:text-golden-primary" />
            </a>
            <a href="https://www.facebook.com/briiaan.leeonel/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="hover:text-golden-primary" />
            </a>
            <a href="https://www.linkedin.com/in/briangelvez97" target="_blank" rel="noopener noreferrer">
              <GrLinkedin size={20} className="hover:text-golden-primary" />
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
            <p className="gradient-text text-[15px]">Diego Bustos - Abogado</p>
            <p className="gradient-text text-[8px]">Creador: @Brian.Gelvez <SiInstagram/></p>
            <p className="gradient-text text-[10px]"> &copy; {currentYear}</p>
        </div>
      </div>
    </div>
  );
}
