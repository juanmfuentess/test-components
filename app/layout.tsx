import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./components/core/ThemeProvider";

export const metadata: Metadata = {
  title: "Mi Librería de Componentes",
  description: "Un proyecto de componentes con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}