import { useEffect, useState } from "react";

function FetchData() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);

  return (
    <>
      <h1>Fetching data</h1>
      {data.length > 0 ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.title}</li>
            </div>
          );
        })
      ) : (
        <div> Loading....</div>
      )}
    </>
  );
}

export default FetchData;
