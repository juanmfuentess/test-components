"use client";

import { Header as BaseHeader } from "../../layout/Header";
import { Button } from "../../ui/Button";
import { Logo } from "../../ui/Logo";

export function Header() {
  return (
    <BaseHeader isSticky>
      <div className="flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex space-x-8">
          <a
            href="#servicios"
            className="text-slate-300 hover:text-sky-400 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#features"
            className="text-slate-300 hover:text-sky-400 transition-colors"
          >
            Ventajas
          </a>
          <a
            href="#faq"
            className="text-slate-300 hover:text-sky-400 transition-colors"
          >
            Preguntas
          </a>
        </nav>
        <Button as="a" href="#contacto" color="primary" withShine>
          Contactar
        </Button>
      </div>
    </BaseHeader>
  );
}
