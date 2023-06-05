import "@/styles/global.css";
import React, { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren<{ className?: string }>;

export const GlassPane: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx("glass rounded-2xl border-2 border-gray-200", className)}>{children}</div>
  );
};
