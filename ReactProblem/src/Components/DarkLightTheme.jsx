import { useTheme } from "./ThemeContext";

function DarkLightTheme() {
  const { isDarkMode } = useTheme();
  const ThemeClass = isDarkMode ? "dark-theme" : `light-theme`;
  return (
    <div style={{ width: "300px", border: "2px solid black", margin: "10px" }}>
      <div className={`container ${ThemeClass}`}>
        <p>This components is selected Theme</p>
      </div>
    </div>
  );
}

export default DarkLightTheme;
