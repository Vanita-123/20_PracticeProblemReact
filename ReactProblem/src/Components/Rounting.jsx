import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
function Rounting() {
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      <BrowserRouter>
        <h1 style={{ margin: "10px" }}>Routing</h1>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rounting;
