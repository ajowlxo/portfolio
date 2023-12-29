import "./App.css";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import { themeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#212121" : "#f8f9fa",
        color: darkMode ? "#f8f9fa" : "#212121",
      }}
    >
      <Home />

      <Skills />

      <Projects />
    </div>
  );
}

export default App;
