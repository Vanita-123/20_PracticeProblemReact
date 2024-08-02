import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(1);
  function handleinc() {
    setcount(count + 1);
  }
  function handledec() {
    if (count > 0) {
      setcount(count - 1);
    }
  }
  return (
    <div
      style={{ height: "200px", width: "300px", border: "2px solid black " }}
    >
      <h1 style={{ margin: "10px" }}>Counter App</h1>
      <h2 style={{ marginLeft: "90px" }}>{count}</h2>

      <button
        style={{
          cursor: "pointer",
          margin: "10px",
          fontSize: "18px",
          backgroundColor: "#3a59b6",
          border: "none",
        }}
        onClick={handleinc}
      >
        Increment
      </button>
      <button
        style={{
          cursor: "pointer",
          margin: "10px",
          fontSize: "18px",
          backgroundColor: "#de4217",
          border: "none",
        }}
        onClick={handledec}
      >
        decrement
      </button>
    </div>
  );
}

export default Counter;
