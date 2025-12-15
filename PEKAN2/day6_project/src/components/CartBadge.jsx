import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartBadge() {
  const { state } = useContext(CartContext);

  return (
    <div style={{ position: "fixed", top: 20, right: 20 }}>
      🛒 Cart: {state.totalItem}
    </div>
  );
}

export default CartBadge;
