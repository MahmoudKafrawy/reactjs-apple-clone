import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "../src/layouts/NavBar";
import Footer from "./layouts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/global.css";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
