import React, { CSSProperties } from "react";

type GridItemProps = {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  as?: React.ElementType;
};

export function GridItem({
  children,
  className = "",
  colSpan,
  rowSpan,
  as: Component = "div",
}: GridItemProps) {
  const style: CSSProperties = {
    gridColumn: colSpan ? `span ${colSpan} / span ${colSpan}` : undefined,
    gridRow: rowSpan ? `span ${rowSpan} / span ${rowSpan}` : undefined,
  };

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}

type GridProps = {
  children: React.ReactNode;
  className?: string;
  gap?: string | number;
  templateColumns?: string;
  templateRows?: string;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  as?: React.ElementType;
};

export function Grid({
  children,
  className = "",
  gap = "1rem",
  templateColumns,
  templateRows,
  align,
  justify,
  as: Component = "div",
}: GridProps) {
  const style: CSSProperties = {
    display: "grid",
    gap: gap,
    gridTemplateColumns: templateColumns,
    gridTemplateRows: templateRows,
    alignItems: align,
    justifyContent: justify,
  };

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}
