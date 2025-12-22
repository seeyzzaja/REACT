import useCart from "../Hooks/UseCart";

function Cart() {
  const { cart, removeFromCart, totalItem, totalPrice } = useCart();

  return (
    <div className="cart-box">
      <h2>🛒 Keranjang</h2>

      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>{item.title}</span>
              <span>
                {item.qty} x ${item.price}
              </span>
              <span>
                = ${(item.price * item.qty).toFixed(2)}
              </span>
              <button onClick={() => removeFromCart(item.id)}>
                ➖
              </button>
            </div>
          ))}

          <hr />

          <p>Total Item: <b>{totalItem}</b></p>
          <p>Total Harga: <b>${totalPrice.toFixed(2)}</b></p>
        </>
      )}
    </div>
  );
}

export default Cart;
