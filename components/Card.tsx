import clsx from "clsx";
import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx("rounded-3xl px-10 py-4 drop-shadow-xl bg-white", className)}>
      {children}
    </div>
  );
};

export default Card;
