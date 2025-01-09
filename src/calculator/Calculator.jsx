import { useEffect, useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState(true);
  const handleClick = (e) => {
    const val = e.target.innerText;

    if (val === "+" && input.length >= 1) {
      setItems((prevItems) => [...prevItems, val, "+"]);
      setInput("");
    } else if (val === "-" && input.length >= 1) {
      setItems((prevItems) => [...prevItems, val, "-"]);
      setInput("");
    } else if (val === "*" && input.length >= 1) {
      setItems((prevItems) => [...prevItems, val, "*"]);
      setInput("");
    } else if (val === "/" && input.length >= 1) {
      setItems((prevItems) => [...prevItems, val, "/"]);
      setInput("");
    } else {
      setInput((prevInput) => prevInput + val);
    }
    console.log(items);
  };

  const calc = () => {
    let firstItem = parseFloat(items[0]);
    for (let i = 0; i < items.length - 1; i++) {
      let currentItem = items[i];
      let nextItem = parseFloat(items[i - 1]);
      console.log(firstItem);

      if (currentItem === "+") firstItem += nextItem;
      if (currentItem === "-") firstItem -= nextItem;
      if (currentItem === "*") firstItem *= nextItem;
      if (currentItem === "/") firstItem /= nextItem;
    }

    setResult(firstItem);

    setInput(result.toString());
    setItems([]);
  };

  return (
    <>
      <div className="max-w-sm mx-auto mt-10 bg-gray-100 shadow-lg rounded-lg p-5">
        {/* Display */}
        <div className="text-right text-xl font-mono p-3 bg-gray-200 rounded mb-5">
          {input || "0"}
        </div>
        <div className="text-right text-lg font-bold p-3 bg-gray-300 rounded">
          {result || ""}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2 mt-5">
          {/* Number and Operator Buttons */}
          <div onClick={handleClick} className="calc-btn">
            1
          </div>
          <div onClick={handleClick} className="calc-btn">
            2
          </div>
          <div onClick={handleClick} className="calc-btn">
            3
          </div>
          <div onClick={handleClick} className="calc-btn">
            +
          </div>

          <div onClick={handleClick} className="calc-btn">
            4
          </div>
          <div onClick={handleClick} className="calc-btn">
            5
          </div>
          <div onClick={handleClick} className="calc-btn">
            6
          </div>
          <div onClick={handleClick} className="calc-btn">
            -
          </div>

          <div onClick={handleClick} className="calc-btn">
            7
          </div>
          <div onClick={handleClick} className="calc-btn">
            8
          </div>
          <div onClick={handleClick} className="calc-btn">
            9
          </div>
          <div onClick={handleClick} className="calc-btn">
            *
          </div>

          <div onClick={handleClick} className="calc-btn">
            0
          </div>
          <div onClick={handleClick} className="calc-btn">
            .
          </div>
          <div onClick={calc} className="calc-btn">
            =
          </div>
          <div onClick={handleClick} className="calc-btn">
            /
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
