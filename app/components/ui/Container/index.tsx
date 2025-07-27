import React from "react";

type ContainerOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  className?: string;
  as?: E;
};

type ContainerProps<E extends React.ElementType> = ContainerOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ContainerOwnProps<E>>;

export function Container<E extends React.ElementType = "div">({
  children,
  className = "",
  as,
}: ContainerProps<E>) {
  const Component = as || "div";

  const baseClassName = "w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <Component className={`${baseClassName} ${className}`}>
      {children}
    </Component>
  );
}
