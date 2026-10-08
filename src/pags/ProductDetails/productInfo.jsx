import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TfiShoppingCart } from "react-icons/tfi";
import { CartContext } from "../../components/context/cartContext";
import { useContext } from "react";
import toast from "react-hot-toast/headless";
import { Navigate } from "react-router-dom";

export default function ProductInfo({ product }) {
  const { cartItems, addToCart, addToFavorites, favorites, removeFromFav } =
    useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === product.id);
  const handelAddToCart = () => {
    addToCart(product);
    toast.success(
      <div className="stoastwrapper">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
          addeed to cart
          <div>
            <button className="btn" onClick={() => Navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  };

  const isInFav = favorites.some((i) => i.id === product.id);

  const handelAddToFav = () => {
    if (isInFav) {
      removeFromFav(product.id);
      toast.error(`${product.title} removed from favorites`);
    } else {
      addToFavorites(product);
      toast.success(`${product.title} add to favorites`);
    }
  };
  return (
    <div className="details-item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="price">${product.price}</p>
      <h5>
        Availbility: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="des">{product.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only{product.stock} products left in stock</span>
      </h5>

      <button
        className={`btn ${isInCart ? "in-cart" : ""}`}
        onClick={handelAddToCart}
      >
        {isInCart ? "item in cart" : "Add to Cart"} <TfiShoppingCart />
      </button>

      <div className="icons">
        <span className={`${isInFav ? "in-fav" : ""}`} onClick={handelAddToFav}>
          <FaRegHeart />
        </span>

        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}
