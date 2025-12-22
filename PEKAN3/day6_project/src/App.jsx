import { CartProvider } from "./Context/CartContext";
import FatchProduk from "./component/FatchProduk";
import Cart from "./component/Cart";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from "./pages/Login";

function App() {


  return (
    <CartProvider>
     <FatchProduk/>
     <Cart/>
    </CartProvider>
  );
}

export default App;
