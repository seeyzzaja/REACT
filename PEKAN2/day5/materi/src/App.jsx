import "./App.css";
import Calculator from "./component/Calculator";
import CounterWithReducer from "./component/CounterWithReducer";
import ThemedButton from "./component/ThemeButton";
import ThemedParagraph from "./component/ThemeParagraf";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <div>
        <Calculator />
      </div>
      <div>
        <CounterWithReducer />
      </div>
      <ThemeProvider>
        <h2>contoh context api</h2>
        <ThemedButton />
        <ThemedParagraph />
      </ThemeProvider>
    </>
  );
}

export default App;
