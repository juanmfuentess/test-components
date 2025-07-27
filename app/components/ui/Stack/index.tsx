import React, { CSSProperties } from "react";

type StackProps = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  spacing?: string | number;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction: "row" | "column";
  as?: React.ElementType;
};

function Stack({
  children,
  className = "",
  style: styleProp = {},
  spacing = "1rem",
  align,
  justify,
  direction,
  as: Component = "div",
  ...rest
}: StackProps) {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    gap: spacing,
    alignItems: align,
    justifyContent: justify,
    ...styleProp,
  };

  return (
    <Component className={className} style={style} {...rest}>
      {children}
    </Component>
  );
}

type PublicStackProps = Omit<StackProps, "direction"> &
  React.ComponentPropsWithRef<"div">;

export function VStack(props: PublicStackProps) {
  return <Stack {...props} direction="column" />;
}

export function HStack(props: PublicStackProps) {
  return <Stack {...props} direction="row" />;
}
