// import viteLogo from "./assets/vite.svg";
import "./App.css";
import Menubar from "./components/Menubar";
import Product from "./components/Product";

function App() {
  return (
    <>
      <header>
        <Menubar />
      </header>
      <main>
        <Product />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
