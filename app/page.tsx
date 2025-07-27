"use client";

import { useTheme } from "./components/core/ThemeProvider";
import { Container } from "./components/ui/Container";
import { VStack, HStack } from "./components/ui/Stack";
import { Button } from "./components/ui/Button";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Container as="main" className="py-10">
      <VStack spacing="2rem" align="center">
        <VStack spacing="1rem" align="center">
          <h1>Mi Librería de Componentes</h1>
          <p>
            El tema actual es: <strong>{theme}</strong>
          </p>
          <Button onClick={toggleTheme}>Cambiar Tema</Button>
        </VStack>

        <VStack
          spacing="1.5rem"
          align="start"
          className="p-8 rounded-lg w-full max-w-2xl"
          style={{ backgroundColor: "var(--card-background)" }}
        >
          <h2 className="font-bold text-xl">Animaciones y Efectos</h2>

          {/* Demostración de las nuevas props */}
          <HStack spacing="1rem" align="center" className="flex-wrap">
            <Button color="primary" withShadow>
              Con Sombra
            </Button>
            <Button color="primary" withPulse>
              Con Pulso
            </Button>
            <Button color="primary" withShine>
              Con Brillo
            </Button>
            <Button color="secondary" withShadow withPulse>
              Sombra y Pulso
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
}
