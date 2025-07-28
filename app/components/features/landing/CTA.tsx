import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";

export function CTA() {
  return (
    <section id="contacto" className="py-20">
      <Container className="text-center">
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
          ¿Listo para Construir tu{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 text-transparent bg-clip-text">
            Máquina de Conversión
          </span>
          ?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-80">
          Hablemos de tu proyecto. Envíame un mensaje y te responderé en menos
          de 24 horas para agendar una llamada inicial sin compromiso.
        </p>
        <Button
          as="a"
          href="mailto:tuemail@ejemplo.com"
          size="lg"
          className="transform hover:scale-105 inline-block"
          withShadow
          withShine
        >
          ¡Empecemos!
        </Button>
      </Container>
    </section>
  );
}
