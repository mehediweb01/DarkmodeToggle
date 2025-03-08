import "./App.css";
import { UseTheme } from "./ThemeContext/UseTheme";

function App() {
  const { Theme, setTheme } = UseTheme();
  return (
    <>
      <div className="flex justify-center items-center h-screen dark:bg-black bg-white">
        <button
          type="button"
          onClick={() => setTheme(!Theme)}
          className="bg-blue-800 p-4 rounded-md text-white font-bold cursor-pointer"
        >
          {Theme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default App;
