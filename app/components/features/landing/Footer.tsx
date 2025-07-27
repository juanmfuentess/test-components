import { Footer as BaseFooter } from "../../layout/Footer";

export function Footer() {
  return (
    <BaseFooter>
      <div className="text-center text-slate-400">
        <p>&copy; 2025 Juan Fuentes. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Diseñado y desarrollado con pasión.</p>
      </div>
    </BaseFooter>
  );
}
