import { useState } from "react";
import Page from './components/Page'
import { ThemeContext } from "./contexts/ThemeContext";

const lightTheme = {
  primary: "#4a148c",
  secondary: "#ff6f00",
  text: "#212121",
  background: "#fff",
};

const darkTheme = {
  primary: "#ff6f00",
  secondary: "#4a148c",
  text: "#fff",
  background: "#212121",
};

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme: themeMode, toggleTheme}}>
      <Page />
    </ThemeContext.Provider>
  )
}

export default App
