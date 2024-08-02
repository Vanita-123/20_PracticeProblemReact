import { useState } from "react";

function SearchItem() {
  const [Search, setSearch] = useState("");
  const items = [
    "App",
    "Broswer",
    "Crome",
    "Docker",
    "FileExpoler",
    "YouTube",
    "Google",
    "Hacker",
    "I-phone",
  ];

  const filterItem = items.filter((item) =>
    item.toLowerCase().includes(Search.toLowerCase())
  );
  return (
    <div style={{ width: "300px", border: "2px solid black", margin: "10px" }}>
      <h1 style={{ margin: "10px" }}>Search Item...</h1>
      <input
        style={{ margin: "10px" }}
        type="text"
        placeholder="SerachItem...."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filterItem.map((item, id) => {
        return (
          <li style={{ margin: "10px" }} key={id}>
            {" "}
            {item}
          </li>
        );
      })}
    </div>
  );
}

export default SearchItem;
