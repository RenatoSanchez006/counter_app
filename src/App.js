import { useState, useEffect } from "react";
import ButtonComp from "./ButtonComp";
import "./Styles.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [decreaseBtn, setActiveBtn] = useState(true);

  useEffect(() => {
    if (counter <= 0) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [counter]);

  const addNumber = (operation) => {
    if (operation == 1) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="center">
      <h1>{counter}</h1>
      <ButtonComp decreaseBtn={decreaseBtn} addNumberFn={addNumber} />
    </div>
  );
}

export default App;
