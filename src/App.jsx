import Button from "./Button";
import { useState } from "react";

export default function App() {
  const [calculation, setCalculation] = useState("");

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
  return (
    <main className="bg-main-background min-h-screen flex flex-col justify-center items-center gap-4">
      <div className="screen bg-screen-background text-white min-w-96 p-4 text-4xl font-bold text-right rounded-lg min-h-20 max-w-96 overflow-x-auto">
        {calculation}
      </div>
      <div className="bg-keypad-background min-w-96 grid grid-cols-4 p-5 rounded-lg gap-3.5">
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button>
        <Button onClick={handleClick} variant={"secondary"}>
          DEL
        </Button>
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleClick} className="text-4xl">
          +
        </Button>
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick} className="text-5xl">
          -
        </Button>
        <Button onClick={handleClick}>.</Button>
        <Button onClick={handleClick}>0</Button>
        <Button onClick={handleClick}>/</Button>
        <Button onClick={handleClick} className="text-4xl">
          *
        </Button>
        <Button
          onClick={handleClick}
          variant={"secondary"}
          className="col-span-2"
        >
          RESET
        </Button>
        <Button
          onClick={handleClick}
          className="col-span-2"
          variant={"tertiary"}
        >
          =
        </Button>
      </div>
    </main>
  );
}
