import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "../../components/slidProduct/Product"
import "./categoryPage.css"
import SlidProductLoading from "../../components/slidProduct/slidProductLoading"
import PageTransition from "../../components/pageTransition"

export default function CategoryPage(){
 
    
     const {category}=useParams()
     const [loading,setLoading]=useState(true);
     const [categoryProducts,setCategoryProducts]=useState([])

     useEffect(()=>{
       fetch(`https://dummyjson.com/products/category/${category}`)
       .then((res)=>res.json())
       .then((data)=>{
        setCategoryProducts(data)
       })
       .catch((err)=>console.log(err))
       .finally(()=>setLoading(false))
     },[category])
    return(
        <PageTransition key={category}>
            <div className="category-products">

            {loading ? (<SlidProductLoading  key={category}/>):
            ( <div className="container">
                <div className="top-slid">
                    <h2>{category}: {categoryProducts.limit}</h2>
                    <p>Discover Our Products</p>
                </div>

                <div className="products">
                    {categoryProducts.products.map((item,index)=>(
                        <Product key={index} item={item}/>
                    ))}
                </div>
            </div>)}
           
        </div>
        </PageTransition>
        
    )
}