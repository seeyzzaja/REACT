import { useContext } from "react";
import { CartContext } from '../Context/CartContext';

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart harus di dalam CartProvider");
  }

  return context;
}
export default useCart