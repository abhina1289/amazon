import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart } = useContext(CartContext);

  // optional quantity decrease
  const decreaseQty = () => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeFromCart(item._id);
    }
  };

  const increaseQty = () => {
    addToCart({ ...item, quantity: item.quantity + 1 });
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
      {/* Image + info */}
      <div className="flex items-center w-2/3">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-contain mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
          <p className="text-yellow-600 font-semibold mt-1">
            ₹{item.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={decreaseQty}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          −
        </button>
        <span className="font-medium">{item.quantity}</span>
        <button
          onClick={increaseQty}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Remove button */}
      <button
        onClick={() => removeFromCart(item._id)}
        className="ml-4 text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
