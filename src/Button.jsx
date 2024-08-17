import React from "react";
import { cn } from "./lib/utils";

function Button({ onClick, variant, className = "", children }) {
  return (
    <button
      className={cn(
        "grid place-content-center bg-key-background-orange h-12 rounded-md shadow-sm shadow-key-background-orange text-3xl font-bold",
        {
          "bg-key-background-blue text-white hover:bg-key-background-blue/70 text-2xl shadow-key-shadow shadow-md":
            variant === "secondary",
          "bg-key-background-toggle text-white shadow-key-shadow-red hover:bg-opacity-85 shadow-md":
            variant === "tertiary",
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
