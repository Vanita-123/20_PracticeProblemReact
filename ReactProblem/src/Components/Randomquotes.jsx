function Randomquotes() {
  let quotes = [
    "hii",
    "hello",
    "ReactJs",
    "Project",
    "random",
    "quotes",
    "generated",
  ];

  const randomquotesIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomquotesIndex];
  return (
    <div>
      <h1 style={{ margin: "10px" }}>Random quotes generated</h1>
      <p style={{ margin: "10px" }}>{quote}</p>
    </div>
  );
}

export default Randomquotes;
