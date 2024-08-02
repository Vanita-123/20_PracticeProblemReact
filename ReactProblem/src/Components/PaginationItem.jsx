import { useState } from "react";

function PaginationItem() {
  const listItem = [
    "App",
    "Brsower",
    "Crome",
    "Docker",
    "FileExpoler",
    "Honest",
    "Hacker",
    "I-phone",
    "Brsower",
    "Crome",
    "Docker",
    "FileExpoler",
    "Honest",
    "Hacker",
    "I-phone",
  ];
  const itemsPerPage = 2;
  const [currentpage, setcurrentpage] = useState(1);
  const indexofLastItem = currentpage * itemsPerPage;
  const FirstItem = indexofLastItem - itemsPerPage;
  const currentItem = listItem.slice(FirstItem, indexofLastItem);
  const PageNumber = [];
  for (let i = 1; i <= Math.ceil(listItem.length / itemsPerPage); i++) {
    PageNumber.push(i);
  }
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      <h1 style={{ margin: "10px" }}>Pagination</h1>
      {currentItem.map((item, index) => {
        return (
          <li style={{ listStyle: "none", margin: "10px" }} key={index}>
            {item}
          </li>
        );
      })}
      <div style={{ margin: "10px" }}>
        {PageNumber.map((number) => {
          return (
            <button key={number} onClick={() => setcurrentpage(number)}>
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PaginationItem;
