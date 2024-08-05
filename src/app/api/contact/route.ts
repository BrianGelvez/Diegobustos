import { NextRequest, NextResponse } from "next/server";

// Configura las variables de entorno
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

// Maneja la solicitud POST
export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json();

    const text = `Nuevo mensaje:\nNombre: ${name}\nTeléfono: ${phone}\nMensaje: ${message}`;

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
    console.log(result);
    if (result.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Error sending message" },
        { status: 500 }
      );
    }

    

  } catch (error) {
    return NextResponse.json(
      { error: "Error sending message" },
      { status: 500 }
    );
  }
}
