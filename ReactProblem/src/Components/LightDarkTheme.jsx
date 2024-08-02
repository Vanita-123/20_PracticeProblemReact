// import { useContext } from "react"
import { useTheme } from "./ThemeContext";

function LightDarkTheme() {
  const { isDarkMode, ToggleDarkMode } = useTheme();
  return (
    <div className="Dark">
      <label style={{ fontWeight: 900 }}>
        <input type="checkbox" checked={isDarkMode} onChange={ToggleDarkMode} />
        Dark
      </label>
    </div>
  );
}

export default LightDarkTheme;
