import React, { CSSProperties } from "react";

type BoxOwnProps<E extends React.ElementType> = {
  children?: React.ReactNode;
  className?: string;
  as?: E;
  p?: string | number;
  px?: string | number;
  py?: string | number;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  width?: string | number;
  height?: string | number;
  bg?: string;
};

type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof BoxOwnProps<E>>;

export function Box<E extends React.ElementType = "div">({
  children,
  className = "",
  as,
  p,
  px,
  py,
  m,
  mx,
  my,
  width,
  height,
  bg,
  ...rest
}: BoxProps<E>) {
  const Component = as || "div";

  const style: CSSProperties = {
    padding: p,
    paddingLeft: px,
    paddingRight: px,
    paddingTop: py,
    paddingBottom: py,
    margin: m,
    marginLeft: mx,
    marginRight: mx,
    marginTop: my,
    marginBottom: my,
    width: width,
    height: height,
    backgroundColor: bg,
  };

  const finalStyle = Object.fromEntries(
    Object.entries(style).filter(([, value]) => value !== undefined)
  );

  return (
    <Component className={className} style={finalStyle} {...rest}>
      {children}
    </Component>
  );
}
