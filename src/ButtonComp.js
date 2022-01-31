import React from "react";

export default function ButtonComp({ addNumberFn, decreaseBtn }) {
  return (
    <div>
      <button disabled={decreaseBtn} onClick={() => addNumberFn(0)}>Decrease</button>
      <button onClick={() => addNumberFn(1)}>Increase</button>
    </div>
  );
}
