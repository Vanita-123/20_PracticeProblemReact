import { useState } from "react";
function Todolist() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const handletodo = (e) => {
    setInput(e.target.value);
  };
  const handleadd = () => {
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };
  const handledelete = (index) => {
    const newtodo = todo.filter((_, i) => i !== index);
    setTodo(newtodo);
  };
  return (
    <div style={{ width: "300px", border: "2px solid black", margin: "10px" }}>
      <h1 style={{ margin: "10px" }}>TodoList</h1>
      <input
        style={{ margin: "10px", fontSize: "16px" }}
        type="text"
        placeholder="Todoitem"
        value={input}
        onChange={handletodo}
      />
      <button
        style={{
          cursor: "pointer",
          fontSize: "16px",
          backgroundColor: "green",
          border: "none",
        }}
        onClick={handleadd}
      >
        add
      </button>

      <ul>
        {todo.map((item, index) => {
          return (
            <li key={index}>
              {item}{" "}
              <button
                style={{
                  cursor: "pointer",
                  margin: "10px",
                  fontSize: "16px",
                  backgroundColor: "red",
                  border: "none",
                }}
                onClick={() => handledelete(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
