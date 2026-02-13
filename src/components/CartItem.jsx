import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem }
from "../redux/CartSlice";
import { Link } from "react-router-dom";
import "./CartItem.css";

function CartItem() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="cart-container">
        <h2>Total Cart Amount: ${totalAmount}</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>

                <div className="qty-buttons">
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
                    +
                  </button>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        <div className="cart-actions">
          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>

          <button
            onClick={() => alert("Checkout Coming Soon!")}
            className="checkout-btn"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
