// import viteLogo from "./assets/vite.svg";
import "./App.css";
import Menubar from "./components/Menubar";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <header>
        <Menubar />
      </header>
      <main>
        <Slider />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
