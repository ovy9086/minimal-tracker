import clsx from "clsx";
import React from "react";

type Props = React.HTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        className
      )}
      {...props}
    />
  );
};
