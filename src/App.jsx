import Button from "./Button";
import { useState } from "react";
import { cn } from "./lib/utils";

export default function App() {
  const [calculation, setCalculation] = useState("");
  const [theme, setTheme] = useState("theme_1");

  function handleClick(e) {
    let btn = e.target.innerText;
    if (btn === "=") {
      setCalculation(eval(calculation));
    } else if (btn === "DEL") {
      setCalculation(calculation.slice(0, calculation.length - 1));
    } else if (btn === "RESET") {
      setCalculation("");
    } else {
      if (calculation.length === 17) return;
      setCalculation(calculation + btn);
    }
  }

  function handleThemeClick() {
    if (theme === "theme_1") setTheme("theme_2");
    else if (theme === "theme_2") setTheme("theme_3");
    else setTheme("theme_1");
  }
  return (
    <main
      className={cn(
        "min-h-screen flex flex-col justify-center items-center gap-4",
        {
          "bg-main-background": theme === "theme_1",
          "bg-stone-100": theme === "theme_2",
        }
      )}
    >
      <div className="theme flex justify-between items-center min-w-96">
        <span
          className={cn("text-white text-2xl font-bold", {
            "text-white": theme === "theme_1",
            "text-stone-950": theme === "theme_2",
          })}
        >
          calc
        </span>
        <div className="font-bold text-[0.65rem] flex gap-6 items-center">
          <span
            className={cn({
              "text-white": theme === "theme_1",
              "text-stone-950": theme === "theme_2",
            })}
          >
            THEME
          </span>
          <div className="flex flex-col gap-1 w-16">
            <div
              className={cn("flex gap-5", {
                "text-white": theme === "theme_1",
                "text-stone-950": theme === "theme_2",
              })}
            >
              <span>1</span>
              <span>2</span>
              <span>3 </span>
            </div>
            <button
              className={cn(" h-5 rounded-xl relative group", {
                "bg-keypad-background": theme === "theme_1",
                "bg-stone-300": theme === "theme_2",
              })}
              onClick={handleThemeClick}
            >
              <div
                className={cn(
                  "top-1 size-3  rounded-full absolute transition-all duration-500 ",
                  {
                    "left-1 bg-key-background-toggle group-hover:bg-red-500":
                      theme === "theme_1",
                    "left-6 bg-orange-700/80 group-hover:bg-orange-500":
                      theme === "theme_2",
                    "left-12": theme === "theme_3",
                  }
                )}
              ></div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "screen  min-w-96 p-4 text-4xl font-bold text-right rounded-lg min-h-20 overflow-x-auto",
          {
            "bg-screen-background text-white": theme === "theme_1",
            "bg-stone-50 text-stone-900": theme === "theme_2",
          }
        )}
      >
        {calculation}
      </div>
      <div
        className={cn(" min-w-96 grid grid-cols-4 p-5 rounded-lg gap-3.5", {
          "bg-keypad-background": theme === "theme_1",
          "bg-stone-300": theme === "theme_2",
        })}
      >
        <Button onClick={handleClick} theme={theme}>
          1
        </Button>
        <Button onClick={handleClick} theme={theme}>
          2
        </Button>
        <Button onClick={handleClick} theme={theme}>
          3
        </Button>
        <Button onClick={handleClick} theme={theme} variant={"secondary"}>
          DEL
        </Button>
        <Button onClick={handleClick} theme={theme}>
          4
        </Button>
        <Button onClick={handleClick} theme={theme}>
          5
        </Button>
        <Button onClick={handleClick} theme={theme}>
          6
        </Button>
        <Button onClick={handleClick} theme={theme} className="text-4xl">
          +
        </Button>
        <Button onClick={handleClick} theme={theme}>
          7
        </Button>
        <Button onClick={handleClick} theme={theme}>
          8
        </Button>
        <Button onClick={handleClick} theme={theme}>
          9
        </Button>
        <Button onClick={handleClick} theme={theme} className="text-5xl">
          -
        </Button>
        <Button onClick={handleClick} theme={theme}>
          .
        </Button>
        <Button onClick={handleClick} theme={theme}>
          0
        </Button>
        <Button onClick={handleClick} theme={theme}>
          /
        </Button>
        <Button onClick={handleClick} theme={theme} className="text-4xl">
          *
        </Button>
        <Button
          onClick={handleClick}
          variant={"secondary"}
          theme={theme}
          className="col-span-2"
        >
          RESET
        </Button>
        <Button
          onClick={handleClick}
          theme={theme}
          className="col-span-2"
          variant={"tertiary"}
        >
          =
        </Button>
      </div>
    </main>
  );
}
