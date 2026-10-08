import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

    // Favorites
    const [favorites, setFavorites] = useState(() => {
    const saveFav = localStorage.getItem("favoritesItems");
    return saveFav ? JSON.parse(saveFav) : [];
  });
    
   const addToFavorites =(item)=>{
    setFavorites((prev)=>{
        if(prev.some((i)=>i.id === item.id)) return prev;
        return [...prev,item];
    })
   }
   
   useEffect(()=>{
    localStorage.setItem("favoritesItems" , JSON.stringify(favorites))
   },[favorites])
   const removeFromFav = (id) =>{
    setFavorites((prev)=>prev.filter((i) => i.id ===id))
   }


    // cart
  const [cartItems, setCartItems] = useState(() => {
    const saveCart = localStorage.getItem("cartItems");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToFavorites,
        favorites,
        removeFromFav,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
