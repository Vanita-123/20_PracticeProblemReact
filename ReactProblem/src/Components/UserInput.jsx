import { useState } from "react";

function UserInput() {
  const [user, setuser] = useState("");
  function handleUser(e) {
    setuser(e.target.value);
    console.log(user);
  }
  return (
    <div
      style={{
        height: "200px",
        width: "300px",
        border: "2px solid black",
        marginTop: "10px",
      }}
    >
      <div style={{ margin: "10px" }}>
        <h1>UserInput</h1>
        <input
          type="text"
          placeholder="UserName"
          value={user}
          onChange={handleUser}
        />
        <h3>
          UserName:<span style={{ color: "#0a54ff" }}>{user}</span>
        </h3>
      </div>
    </div>
  );
}

export default UserInput;
