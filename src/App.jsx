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
        <div className="mb-2">
          <Slider />
        </div>
        <div>
          <Product />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
