import { useContext } from "react";
import { CartContext } from "../../components/context/cartContext";
import PageTransition from "../../components/pageTransition";
import Product from "../../components/slidProduct/Product";



export default function Favorites(){
    const {favorites}=useContext(CartContext);
    return(
        <PageTransition>
            <div className="category-products FavoritesPage">
                <div className="container">
                    <div className="top-slid">
                        <h2>Your Favorites</h2>
                    </div>
                     {favorites.length === 0 ?(
                        <p>NoFavorites Products yet.</p>
                     ):(
                        <div className="products">
                            {favorites.map(item =>(
                                <Product item={item} key={item.id}/>
                            ))}
                        </div>
                     )}

                </div>
            </div>
        </PageTransition>

    )
} 