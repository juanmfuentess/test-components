import React from "react";
import { clsx } from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          "bg-[var(--card-background)] rounded-2xl border border-[var(--secondary)]",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Card.displayName = "Card";
