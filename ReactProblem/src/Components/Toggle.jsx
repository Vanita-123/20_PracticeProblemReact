import { useState } from "react";

function Toggle() {
  const [toggle, settoggle] = useState();
  return (
    <div
      style={{
        height: "100px",
        width: "300px",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      <div style={{ margin: "10px" }}>
        <input
          type="checkbox"
          style={{ color: "" }}
          onChange={() => {
            settoggle(!toggle);
          }}
        />

        {toggle ? (
          <h3 style={{ color: "green" }}>On</h3>
        ) : (
          <h3 style={{ color: "red" }}>Off</h3>
        )}
      </div>
    </div>
  );
}

export default Toggle;
