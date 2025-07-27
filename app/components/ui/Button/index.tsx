import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "standard" | "outlined" | "ghost";
type ButtonColor = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
}

export function Button({
  children,
  variant = "standard",
  color = "primary",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const classes = [];

  classes.push(
    "px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  );

  const variantStyles = {
    standard: `text-[var(--${color}-foreground)] bg-[var(--${color})] border-2 border-transparent hover:brightness-110`,
    outlined: `text-[var(--${color})] bg-transparent border-2 border-[var(--${color})] hover:bg-[var(--${color})] hover:text-[var(--${color}-foreground)]`,
    ghost: `text-[var(--${color})] bg-transparent border-2 border-transparent hover:bg-[var(--secondary)]`,
  };
  classes.push(variantStyles[variant]);

  if (disabled) {
    classes.push("opacity-50 cursor-not-allowed");
  }

  if (className) {
    classes.push(className);
  }

  const combinedClassName = classes.join(" ");

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
