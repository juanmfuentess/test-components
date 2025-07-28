import React from "react";
import { Container } from "../../ui/Container";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
  isSticky?: boolean;
};

export function Header({
  children,
  className = "",
  isSticky = false,
}: HeaderProps) {
  const baseClasses = "w-full py-4";

  const stickyClasses = isSticky
    ? "sticky top-0 z-50 bg-[var(--background)]/80 shadow-sm backdrop-blur-sm"
    : "";

  return (
    <header className={`${baseClasses} ${stickyClasses} ${className}`}>
      <Container>{children}</Container>
    </header>
  );
}
