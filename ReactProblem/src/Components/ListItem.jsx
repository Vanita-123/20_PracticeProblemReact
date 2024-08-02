function ListItem() {
  const Fruits = ["apple", "mango", "grapes", "banana"];
  return (
    <div>
      <h1> ListItem</h1>
      {Fruits.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </div>
  );
}

export default ListItem;
