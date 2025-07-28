"use client";

import { Header as BaseHeader } from "../../layout/Header";
import { Button } from "../../ui/Button";
import { Logo } from "../../ui/Logo";
import { ThemeToggle } from "../../ui/ThemeToggle";

export function Header() {
  return (
    <BaseHeader isSticky>
      <div className="flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex space-x-8">
          <a
            href="#servicios"
            className="text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity"
          >
            Servicios
          </a>
          <a
            href="#features"
            className="text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity"
          >
            Ventajas
          </a>
          <a
            href="#faq"
            className="text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity"
          >
            Preguntas
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button as="a" href="#contacto" color="primary" withShine>
            Contactar
          </Button>
        </div>
      </div>
    </BaseHeader>
  );
}
