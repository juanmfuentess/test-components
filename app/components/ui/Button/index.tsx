import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        standard: "border-2 border-transparent",
        outlined: "bg-transparent border-2",
        ghost: "bg-transparent border-2 border-transparent",
      },
      size: {
        md: "px-4 py-2 text-base",
        lg: "px-8 py-3 text-lg",
      },
      color: {
        primary: "",
        secondary: "",
      },
    },
    compoundVariants: [
      {
        variant: "standard",
        color: "primary",
        className:
          "bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-110",
      },
      {
        variant: "standard",
        color: "secondary",
        className:
          "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:brightness-110",
      },
      {
        variant: "outlined",
        color: "primary",
        className:
          "border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]",
      },
      {
        variant: "outlined",
        color: "secondary",
        className:
          "border-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]",
      },
      {
        variant: "ghost",
        color: "primary",
        className: "text-[var(--primary)] hover:bg-[var(--secondary)]",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]",
      },
    ],
    defaultVariants: {
      variant: "standard",
      color: "primary",
      size: "md",
    },
  }
);

type ButtonOwnProps<E extends React.ElementType> = {
  as?: E;
  withShadow?: boolean;
  withPulse?: boolean;
  withShine?: boolean;
} & VariantProps<typeof buttonVariants>;

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps<E> | "color">;

export const Button = React.forwardRef(
  <E extends React.ElementType = "button">(
    {
      as,
      className,
      variant,
      color,
      size,
      withShadow,
      withPulse,
      withShine,
      ...props
    }: ButtonProps<E>,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const Component = as || "button";
    return (
      <Component
        className={clsx(
          buttonVariants({ variant, color, size }),
          {
            "btn-shadow": withShadow,
            "btn-pulse": withPulse,
            "btn-shine": withShine,
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
