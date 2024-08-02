import { useState } from "react";

function ColorPicker() {
  const [colorpicker, setcolorpicker] = useState();
  const handlecolor = (e) => {
    setcolorpicker(e.target.value);
  };
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      <h1 style={{ margin: "10px" }}>Color Picker</h1>
      <input
        type="color"
        onChange={handlecolor}
        style={{ width: "150px", margin: "10px" }}
      />
      <div
        style={{
          height: "100px",
          width: "250px",
          margin: "10px",
          border: "2px solid black",
          background: colorpicker,
        }}
      ></div>
      <h3 style={{ margin: "10px", color: "blue" }}>{colorpicker}</h3>
    </div>
  );
}

export default ColorPicker;
