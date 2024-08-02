import { useCart } from "./CartContext";

function ShopingCart() {
  const product = [
    { id: 1, name: "ProductA" },
    { id: 2, name: "ProductB" },
    { id: 3, name: "ProductC" },
    { id: 4, name: "ProductD" },
    { id: 5, name: "ProductE" },
    { id: 6, name: "ProductF" },
  ];

  const { cartState, cartdispatch } = useCart();

  const handleAdd = (item) => {
    const existingCartItem = cartState.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingCartItem) {
      cartdispatch({
        type: "Update-Quantity",
        payload: { id: item.id, quantity: existingCartItem.quantity + 1 },
      });
    } else {
      cartdispatch({ type: "Add-To-Cart", payload: { ...item, quantity: 1 } });
    }
  };

  const updateQuantity = (itemid, quantity) => {
    if (quantity > 0) {
      cartdispatch({
        type: "Update-Quantity",
        payload: { id: itemid, quantity },
      });
    }
  };

  const removeCart = (itemid) => {
    cartdispatch({ type: "Remove-From-Cart", payload: itemid });
  };

  return (
    <div style={{ width: "300px", border: "2px solid black", margin: "10px" }}>
      <h1 style={{ margin: "10px" }}>Shopping Cart</h1>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} <span style={{ color: "blue" }}> {item.quantity} </span>
            <button
              style={{
                margin: "5px",
                cursor: "pointer",
                fontSize: "16px",
                backgroundColor: "green",
                border: "none",
              }}
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              style={{
                margin: "5px",
                cursor: "pointer",
                fontSize: "16px",
                backgroundColor: "red",
                border: "none",
              }}
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              style={{
                cursor: "pointer",
                fontSize: "16px",
                backgroundColor: "red",
                border: "none",
              }}
              onClick={() => removeCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2 style={{ margin: "10px" }}>Product List</h2>
      <ul>
        {product.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              style={{
                cursor: "pointer",
                margin: "5px",
                fontSize: "16px",
                backgroundColor: "green",
                border: "none",
              }}
              onClick={() => handleAdd(item)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopingCart;
