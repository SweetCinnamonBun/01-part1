import { useState } from "react";

// const Display = ({ counter }) => <div>{counter}</div>;

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);

//   const decreaseByOne = () => setCounter(counter - 1);
//   const setToZero = () => setCounter(0);

//   return (
//     <div>
//       <Display counter={counter} />

//       <Button handleClick={increaseByOne} text="plus" />
//       <Button handleClick={setToZero} text="zero" />
//       <Button handleClick={decreaseByOne} text="minus" />
//     </div>
//   );
// };
const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = (props) => <div>{props.value}</div>;

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
      <div>
        <Display value={value} />
        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(0)}>reset</button>
        <button onClick={setToValue(value + 1)}>increment</button>
      </div>
    </div>
  );
};
export default App;
