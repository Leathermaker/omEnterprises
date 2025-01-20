import React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps {
  title: string;
  className?: string;
  Icon?: React.ReactNode; // Use React.ReactNode for better type safety
}

const Button: React.FC<ButtonProps> = ({ title, className, Icon }) => {
  return (
    <button
      className={cn(
        "bg-OMblue hover:bg-OMblue/80 duration-300 px-12 py-2 w-fit rounded-sm text-white flex items-center justify-center gap-2  ",
        className
      )}
    >
      <h1>{title}</h1>
      {Icon && <span>{Icon}</span>} {/* Render the icon if it exists */}
    </button>
  );
};

export default Button;