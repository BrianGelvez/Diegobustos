"use client";

import "@sweetalert2/theme-dark/dark.css";
import Image from "next/image";
import Swal from "sweetalert2";

const TELEGRAM_BOT_TOKEN = "6833395589:AAHz-q0uulXnw76VkjTct-bqzOo23nEaTTM";
const TELEGRAM_CHAT_ID = "1158769054";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export default function Form() {
  async function fetchForm(data: any) {
    try {
      const text = `Nuevo mensaje:\nNombre: ${data.name}\nTeléfono: ${data.phone}\nMensaje: ${data.message}`;

      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
        }),
      });

      const result = await response.json();
      if (result.ok) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Recibimos con exito su mensaje",
        });
      } else {
        alert("Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };
    fetchForm(data);
  };

  return (
    <div
      id="contacto"
      className="relative w-full flex flex-col lg:justify-center lg:items-center gap-7 bg-gradient-to-b from-black px-4 pb-7"
    >
      <Image
        src="/fondo.png"
        alt="Fondo de la página de Diego Bustos, abogado penalista"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-[-1]"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-[-1]" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-[-1]" />
      <div className="lg:w-[70%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="flex flex-col gap-5 justify-start items-start">
          <h2 className="text-xl gradient-text font-extrabold">
            ¿Quieres recuperar tu moto de forma inmediata?
          </h2>
          <p>
            Por favor, completa el siguiente formulario con tu nombre, número de
            celular y detalles sobre tu caso. Nuestro equipo{" "}
            <span className="text-golden-secundary underline">
              analizará tu solicitud lo antes posible
            </span>{" "}
            y se pondrá en contacto contigo para ofrecerte una solución rápida y
            eficaz.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-4 py-5"
        >
          <label htmlFor="name" className="font-semibold underline">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border-[1px] p-2 shadow-full border-[#596363] backdrop-blur-sm bg-black/50 rounded-lg"
          />
          <label htmlFor="phone" className="font-semibold underline">
            Celular:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="border-[1px] p-2 shadow-full border-[#596363] backdrop-blur-sm bg-black/50 rounded-lg"
          />
          <label htmlFor="message" className="font-semibold underline">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="border-[1px] p-2 shadow-full border-[#596363] backdrop-blur-sm bg-black/50 rounded-lg h-32 resize-none"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-golden-secundary bg-gradient-to-tl via-golden-primary from-golden-accent2 text-white rounded-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
