import React from "react";
import { cn } from "./lib/utils";

function Button({
  onClick,
  variant = "primary",
  className = "",
  children,
  theme,
}) {
  return (
    <button
      className={cn(
        "grid place-content-center h-14 sm:h-12 rounded-md shadow-sm font-bold text-3xl",
        {
          " bg-key-background-orange shadow-key-background-orange text-very-dark-grayish-blue":
            variant === "primary" && theme === "theme_1",
          "bg-key-background-blue text-white hover:bg-key-background-blue/70 text-2xl shadow-key-shadow shadow-md":
            variant === "secondary" && theme === "theme_1",
          "bg-key-background-toggle text-white shadow-key-shadow-red hover:bg-opacity-85 shadow-md":
            variant === "tertiary" && theme === "theme_1",
          " bg-gray-100 shadow-gray-200 ":
            variant === "primary" && theme === "theme_2",
          "bg-teal-600 text-white hover:bg-teal-400 text-2xl shadow-teal-800 shadow-sm":
            variant === "secondary" && theme === "theme_2",
          "bg-orange-700 text-white shadow-orange-800 hover:bg-orange-600 shadow-md":
            variant === "tertiary" && theme === "theme_2",
          " bg-Very-dark-violet-key-background-3 text-Light-yellow-3 shadow-Dark-magenta-key-shadow-3":
            variant === "primary" && theme === "theme_3",
          "bg-Dark-violet-key-background-3 text-white hover:bg-purple-800 text-2xl shadow-Vivid-magenta-key-shadow-3 ":
            variant === "secondary" && theme === "theme_3",
          "bg-Pure-cyan-key-background-toggle-3 text-[#000000] shadow-Soft-cyan-key-shadow-3 hover:bg-teal-300 shadow-sm":
            variant === "tertiary" && theme === "theme_3",
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
