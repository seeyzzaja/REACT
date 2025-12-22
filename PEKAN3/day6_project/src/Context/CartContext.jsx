import { createContext, useState, useCallback, useMemo } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ➕ ADD TO CART (PAKAI QTY)
  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  // ➖ REMOVE / KURANGI QTY
  const removeFromCart = useCallback((id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }, []);

  // 🧮 TOTAL ITEM
  const totalItem = useMemo(() => {
    return cart.reduce((total, item) => total + item.qty, 0);
  }, [cart]);

  // 💰 TOTAL HARGA
  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
