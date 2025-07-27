import React, { CSSProperties } from "react";

type SidebarProps = {
  children: React.ReactNode;
  className?: string;
  position?: "left" | "right";
  width?: string | number;
};

export function Sidebar({
  children,
  className = "",
  position = "left",
  width = "250px",
}: SidebarProps) {
  const style: CSSProperties = {
    width: width,
    ...(position === "left" && {
      borderRight: "1px solid var(--card-background)",
    }),
    ...(position === "right" && {
      borderLeft: "1px solid var(--card-background)",
    }),
  };

  const baseClasses = "h-screen p-4";

  return (
    <aside className={`${baseClasses} ${className}`} style={style}>
      {children}
    </aside>
  );
}
