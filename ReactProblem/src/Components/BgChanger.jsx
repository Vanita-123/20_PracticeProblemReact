import { useState } from "react";

function BgChanger() {
  const [color, setcolor] = useState("blue");
  const handlecolor = (item) => {
    setcolor(item);
  };
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      <div
        style={{
          margin: "20px",
          backgroundColor: color,
          width: "250px",
          height: "120px",
        }}
      ></div>
      <div style={{ margin: "5px" }}>
        <button
          style={{
            cursor: "pointer",
            fontSize: "14px",
            backgroundColor: "red",
            border: "none",
          }}
          onClick={() => handlecolor("red")}
        >
          Red
        </button>
        <button
          style={{
            cursor: "pointer",
            fontSize: "14px",
            color: "white",
            backgroundColor: "black",
            border: "none",
          }}
          onClick={() => handlecolor("black")}
        >
          Black
        </button>
        <button
          style={{
            cursor: "pointer",
            fontSize: "14px",
            backgroundColor: "green",
            border: "none",
          }}
          onClick={() => handlecolor("green")}
        >
          {" "}
          Green
        </button>
        <button
          style={{
            cursor: "pointer",
            fontSize: "14px",
            backgroundColor: "yellow",
            border: "none",
          }}
          onClick={() => handlecolor("yellow")}
        >
          yellow
        </button>
        <button
          style={{
            cursor: "pointer",
            fontSize: "14px",
            backgroundColor: "Aqua",
            border: "none",
          }}
          onClick={() => handlecolor("aqua")}
        >
          Aqua
        </button>
        <button
          style={{
            cursor: "pointer",
            fontSize: "14px",
            backgroundColor: "brown",
            border: "none",
          }}
          onClick={() => handlecolor("brown")}
        >
          Brown
        </button>
      </div>
    </div>
  );
}

export default BgChanger;
