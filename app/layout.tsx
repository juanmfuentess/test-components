import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./components/core/ThemeProvider";

export const metadata: Metadata = {
  title: "JF Dev | Desarrollo de Landing Pages de Alta Conversión",
  description:
    "Servicios de diseño y desarrollo de landing pages a medida. Optimiza tus campañas y convierte visitantes en clientes con una página de alto impacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-mx" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
