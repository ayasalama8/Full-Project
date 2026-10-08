import { useContext } from "react";
import { CartContext } from "../../components/context/cartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import PageTransition from "../../components/pageTransition";
export default function Cart() {
  const { cartItems, increaseQuantity ,decreaseQuantity,removeFromCart} = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
   <PageTransition>
     <div className="checkout">
      {" "}
      <div className="ordersummary">
        <h1>OrderSummary</h1>{" "}
        <div className="items">
          {cartItems.length === 0 ? ( 
            <p>Your Cart Is Empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="item-cart" key={index}>
                <div className="image-name">
                  {" "}
                  <div className="img-item">
                    <img src={item.images[0]} alt="" />
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p className="price-item">&{item.price}</p>
                    <div className="quantity-controal">
                      <button onClick={()=> decreaseQuantity(item.id)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button className="delete-item" onClick={()=>removeFromCart(item.id)}>
                  <FaTrashAlt />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="buttom-summary">
          <div className="shop-table">
            <p>Total:</p>
            <span className="total-checkout">${total.toFixed(2)}</span>
          </div>
        </div>
        <div className="buttom-div">
          <button type="submit">Place Order</button>
        </div>
      </div>
    </div>
   </PageTransition>
  );
}
