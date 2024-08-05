'use client'

import { useEffect } from 'react';

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget m-0 h-[1000px] lg:h-[680px]"
      data-url="https://calendly.com/grnetservicios/reunion-de-15-minutos?background_color=000000&text_color=ececec&primary_color=fee37d"

    ></div>
  );
};
