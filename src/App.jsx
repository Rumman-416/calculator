import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const onClickHandler = (e) => {
    setInput(input.concat(e.target.value));
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      console.error("Error");
    }
  };

  const square = () => {
    setInput(input * input);
  };
  const squareRoot = () => {
    setInput(Math.sqrt(input));
  };
  const insertPi = () => {
    setInput(input.concat(Math.PI));
  };
  const clear = () => {
    setInput("");
  };

  return (
    <div className=" flex justify-center items-center">
      <div className=" h-4/5 bg-gray-800 p-5 md:w-5/6 lg:w-1/4">
        <div className=" flex justify-center items-center gap-5 ">
          <input
            type="text"
            className=" h-20 w-5/6 rounded-xl text-3xl"
            value={input}
            readOnly
          />
        </div>
        <div className="flex justify-center items-center gap-4 m-5">
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"1"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"2"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"3"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-yellow-400 rounded-full"
            value={"+"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-red-500 text-white rounded-full"
            value={"c"}
            onClick={clear}
          />
        </div>
        <div className="flex justify-center items-center gap-4 m-5">
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"4"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"5"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"6"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-yellow-400 rounded-full"
            value={"-"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-orange-500 rounded-full"
            value={"sq"}
            onClick={square}
          />
        </div>
        <div className="flex justify-center items-center gap-4 m-5">
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"7"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"8"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"9"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-yellow-400 rounded-full"
            value={"/"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-orange-500 rounded-full"
            value={"sq-rt"}
            onClick={squareRoot}
          />
        </div>
        <div className="flex justify-center items-center gap-4 m-5">
          <input
            type="button"
            className=" h-20 w-20 bg-green-400 rounded-full"
            value={"="}
            onClick={calculate}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-gray-300 rounded-full"
            value={"0"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-yellow-400 rounded-full"
            value={"*"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-yellow-400 rounded-full"
            value={"%"}
            onClick={onClickHandler}
          />
          <input
            type="button"
            className=" h-20 w-20 bg-orange-500 rounded-full"
            value={"pi"}
            onClick={insertPi}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
