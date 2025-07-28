"use client";

import React from "react";
import { useTheme } from "../../core/ThemeProvider";
import { clsx } from "clsx";
import { SunIcon, MoonIcon } from "../Icons"; // Importamos los nuevos iconos

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "relative inline-flex h-8 w-14 items-center rounded-full transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]",
        theme === "light" ? "bg-slate-300" : "bg-slate-800"
      )}
      aria-label="Toggle theme"
    >
      <span
        className={clsx(
          "inline-flex items-center justify-center h-6 w-6 transform rounded-full transition-transform",
          theme === "light"
            ? "bg-sky-500 translate-x-1"
            : "bg-slate-600 translate-x-7"
        )}
      >
        {/* Usamos los nuevos componentes de icono */}
        {theme === "light" ? (
          <SunIcon className="h-4 w-4 text-white" />
        ) : (
          <MoonIcon className="h-4 w-4 text-white" />
        )}
      </span>
    </button>
  );
}
