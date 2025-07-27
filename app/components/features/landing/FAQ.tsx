"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import { Container } from "../../ui/Container";

// Sub-componente para cada item del FAQ
const FaqItem = ({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-800 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-6"
      >
        <span className="text-lg font-semibold">{question}</span>
        <span
          className={clsx(
            "text-sky-400 text-2xl transition-transform transform",
            isOpen && "rotate-45"
          )}
        >
          +
        </span>
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-[max-height] duration-500 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-6 pb-6 text-slate-400">{children}</div>
      </div>
    </div>
  );
};

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <Container className="max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-400">
            Resolvemos tus dudas más comunes para que tomes la mejor decisión.
          </p>
        </div>
        <div className="space-y-4">
          <FaqItem question="¿Qué necesito para empezar?">
            <p>
              Principalmente, necesitaré tu logo (idealmente en formato
              vectorial), los textos que quieres incluir, y las imágenes o
              videos de tu producto/servicio. Si no tienes algo, ¡no te
              preocupes!, puedo asesorarte.
            </p>
          </FaqItem>
          <FaqItem question="¿El servicio incluye dominio y hosting?">
            <p>
              No, el costo del dominio (ej. tuempresa.com) y el hosting (el
              servidor donde se aloja la página) no están incluidos. Sin
              embargo, te ofrezco asesoría completa y sin costo para que elijas
              y compres la mejor opción según tus necesidades y presupuesto.
            </p>
          </FaqItem>
          <FaqItem question="¿En cuánto tiempo estará lista mi landing page?">
            <p>
              Depende del paquete. El "Arranque Digital" suele tomar unos 5 días
              hábiles. El "Crecimiento y Conversión" entre 10 y 12 días. El de
              "Optimización Total" alrededor de 20 días. Estos plazos comienzan
              una vez que entregas todo el material necesario.
            </p>
          </FaqItem>
        </div>
      </Container>
    </section>
  );
}
