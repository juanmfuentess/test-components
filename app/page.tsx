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
          <h2 className="font-bold text-xl">Variantes de Botones</h2>

          <HStack spacing="1rem" align="center">
            <Button variant="standard" color="primary">
              Standard Primary
            </Button>
            <Button variant="outlined" color="primary">
              Outlined
            </Button>
            <Button variant="ghost" color="primary">
              Ghost
            </Button>
          </HStack>

          <HStack spacing="1rem" align="center">
            <Button variant="standard" color="secondary">
              Standard Secondary
            </Button>
            <Button variant="outlined" color="secondary">
              Outlined
            </Button>
            <Button variant="ghost" color="secondary">
              Ghost
            </Button>
          </HStack>

          <h2 className="font-bold text-xl mt-4">Estados y Customización</h2>

          <HStack spacing="1rem" align="center">
            <Button disabled>Botón Deshabilitado</Button>
            <Button
              variant="outlined"
              color="primary"
              className="rounded-full !border-4 !px-8"
            >
              Custom
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
}
