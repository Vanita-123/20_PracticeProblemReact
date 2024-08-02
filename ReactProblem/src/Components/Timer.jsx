import { useEffect, useState } from "react";

function Timer() {
  const [time, settime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        settime(time - 1);
      }, 1000);
      return () => clearInterval;
    }
  }, [time]);

  return (
    <div
      style={{
        height: "110px",
        width: "300px",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      <div style={{ margin: "10px" }}>
        <h1>Timer</h1>
        <p>
          Time Left: <span style={{ color: "#0918f1" }}> {time} Second</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Timer;
