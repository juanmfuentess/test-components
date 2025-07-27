import React, { ButtonHTMLAttributes } from "react";
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
    },
  }
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  withShadow?: boolean;
  withPulse?: boolean;
  withShine?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      withShadow = false,
      withPulse = false,
      withShine = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={clsx(
          buttonVariants({ variant, color }),
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
