import React from "react";
import { Container } from "../../ui/Container";

type FooterProps = {
  children: React.ReactNode;
  className?: string;
};

export function Footer({ children, className = "" }: FooterProps) {
  const baseClasses = "w-full py-8 mt-16 border-t";

  return (
    <footer className={`${baseClasses} ${className}`}>
      <Container>{children}</Container>
    </footer>
  );
}
