import { useState } from "react";
import Hamburger from "hamburger-react";
import "../App.css";

function ResponsiveNav() {
  const [menu, setmenu] = useState(false);
  const handlemenu = () => {
    setmenu(!menu);
  };

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      <h1 style={{ margin: "10px" }}>Responsive NavBar</h1>

      <nav>
        <button className=".hamburger-button" onClick={handlemenu}>
          <Hamburger />
        </button>
      </nav>
      {menu && (
        <ul className="menu-list">
          <li>Home</li>
          <li>about</li>
          <li>service</li>
          <li>contact</li>
        </ul>
      )}
    </div>
  );
}

export default ResponsiveNav;
