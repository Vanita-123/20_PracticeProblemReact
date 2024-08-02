import "./App.css";
import Counter from "./Components/Counter";
import Hello from "./Components/Hello";
import UserInput from "./Components/UserInput";
import ListItem from "./Components/ListItem";
import Toggle from "./Components/Toggle";
import FetchData from "./Components/FetchData";
import Timer from "./Components/Timer";
import Todolist from "./Components/Todolist";
import BgChanger from "./Components/BgChanger";
import Rounting from "./Components/Rounting";
import Randomquotes from "./Components/Randomquotes";
import UploadImage from "./Components/UploadImage";
import LoginPage from "./Components/LoginPage";
import WeatherApp from "./Components/WeatherApp";
import SearchItem from "./Components/SearchItem";
import PaginationItem from "./Components/PaginationItem";
import ColorPicker from "./Components/ColorPicker";
import ResponsiveNav from "./Components/ResponsiveNav";
import LightDarkTheme from "./Components/LightDarkTheme";
import DarkLightTheme from "./Components/DarkLightTheme";
import { ThemeProvider } from "./Components/ThemeContext";
import ShopingCart from "./Components/ShopingCart";
import { CartProvider } from "./Components/CartContext";

function App() {
  return (
    <>
      <Hello />
      <Counter />
      <UserInput />
      <ListItem />
      <Toggle />
      <FetchData />
      <Timer />
      <Todolist />
      <BgChanger />
      <Rounting />
      <Randomquotes />
      <UploadImage />
      <LoginPage />
      <WeatherApp />
      <SearchItem />
      <ColorPicker />
      <PaginationItem />
      <ResponsiveNav />
      <ThemeProvider>
        <LightDarkTheme />
        <DarkLightTheme />
      </ThemeProvider>
      <CartProvider>
        <ShopingCart />
      </CartProvider>
    </>
  );
}

export default App;
