"use client";

import React, { useState, useEffect } from "react";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";

const phrases = [
  "Clientes Fieles",
  "Más Conversiones",
  "Mejores Leads",
  "Ventas Exitosas",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    // Si hemos terminado de escribir, esperamos 2.5s antes de empezar a borrar.
    if (subIndex === phrases[index].length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2500);
      return;
    }

    // Si hemos terminado de borrar, esperamos 600ms antes de pasar a la siguiente palabra.
    if (subIndex === 0 && isDeleting) {
      setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 600);
      return;
    }

    // --- LA CORRECCIÓN ESTÁ AQUÍ ---
    // Se invirtió el orden de setSubIndex y setText para que la lógica sea correcta.
    const timeout = setTimeout(
      () => {
        const nextSubIndex = subIndex + (isDeleting ? -1 : 1);
        setText(phrases[index].substring(0, nextSubIndex));
        setSubIndex(nextSubIndex);
      },
      isDeleting ? 50 : 60
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section id="hero" className="pt-32 pb-20 text-center">
      <Container>
        {/* Estructura de título actualizada */}
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
          <div>Transforma tus Clics en</div>
          <div className="h-20 md:h-24">
            {" "}
            {/* Contenedor para evitar saltos de layout */}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 text-transparent bg-clip-text">
              {text}
            </span>
            <span className="blinking-cursor"></span>
          </div>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Diseño y desarrollo landing pages de alto impacto que no solo se ven
          increíbles, sino que están construidas para convertir. Lanza tu idea,
          captura leads y maximiza tu inversión.
        </p>
        <Button
          as="a"
          href="#servicios"
          size="lg"
          className="transform hover:scale-105"
          withShadow
          withShine
        >
          Ver Paquetes
        </Button>
      </Container>
    </section>
  );
}
