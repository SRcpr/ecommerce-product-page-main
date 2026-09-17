// import viteLogo from "./assets/vite.svg";
import "./App.css";
import Menubar from "./components/Menubar";
import Product from "./components/Product";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <header>
        <Menubar />
      </header>
      <main>
        <div>
          <Slider />
        </div>
        <div>
          <Product />
        </div>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Sunil</a>.
      </footer>
    </>
  );
}

export default App;
