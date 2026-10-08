import React, { useContext } from "react"
import {FaCheck, FaStar} from "react-icons/fa6"
import {FaCartArrowDown} from "react-icons/fa"
import {FaRegHeart} from "react-icons/fa"
import {FaRegStarHalfStroke} from "react-icons/fa6"
import {FaShare} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../context/cartContext"
import { toast} from "react-hot-toast"

export default function Product({item}){

    const navigate =useNavigate()
    const {cartItems ,addToCart,addToFavorites,favorites, removeFromFav}=useContext(CartContext);

    const isInCart =cartItems.some(i =>i.id === item.id)

    const handelAddToCart =()=>{
        addToCart(item)
        toast.success(
            <div className="stoastwrapper">
                <img src={item.images[0]} alt="" className="toast-img"/>
                <div className="toast-content">
                    <strong>{item.title}</strong>
                    addeed to cart
                    <div>
                    <button className="btn" onClick={()=>navigate("/cart")}>View Cart</button>
                   </div>
                </div>
            </div>
            ,{duration : 3500}
        )
    }

    const isInFav =favorites.some(i =>i.id === item.id)

    const handelAddToFav = ()=>{
        if(isInFav){
         removeFromFav(item.id)
         toast.error(`${item.title} removed from favorites`)
        }else{
        addToFavorites(item);
        toast.success(`${item.title} add to favorites`)
        }
    }

    return(
        
        <div className={`product ${isInCart?'in-cart' :""}`}>
            <Link to={`/products/${item.id}`}>
            <span className="status-cart"><FaCheck/>InCart</span>
            <div className="img-product">
                <img src={item.images[1]} alt="" />
            </div>
            <p className="name-product">{item.title}</p>
             <div className="stars">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStarHalfStroke/>
             </div>
            <p className="Price"><span>{item.price}</span></p></Link>
            <div className="icons">
                <span className="btn-AddCart" onClick={handelAddToCart}><FaCartArrowDown/></span>
               
                <span  
                 className={`${isInFav ? "in-fav" : ""}`}
                 onClick={handelAddToFav}>
                 <FaRegHeart/>
                 </span>
                <span><FaShare/></span>
                
            </div>
        </div>
    )
}