import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const val = e.target.innerText;
    setInput((prevInput) => prevInput + val);
  };

  const calc = () => {
    handleBackspace();
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => {
      const op = ["+", "-", "*", "/"];
      if (op.includes(prevInput.slice(-1))) {
        return prevInput.slice(0, -1);
      }
      return prevInput;
    });
  };

  const handleOrigin = () => {
    setInput("");
  };
  const handleBack = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
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
          <div onClick={handleBack} className="calc-btn">
            del
          </div>
          <div onClick={handleOrigin} className="calc-btn">
            c
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
