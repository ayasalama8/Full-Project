import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import "./productDetails.css";
import SlidProduct from "../../components/slidProduct/slidProduct";
import ProductDetailsLoading from "./productDetailsLoading";
import SlidProductLoading from "../../components/slidProduct/slidProductLoading";
import ProductImages from "./productImages";
import ProductInfo from "./productInfo";
import PageTransition from "../../components/pageTransition";


export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingProducts(false));
  }, [product?.category]);
  if (!product) return <p>Product Not Found</p>;
  return (
    <pageTransitionEvent key={id}>
       <div>
      {loading ? (
        <ProductDetailsLoading />
      ) : (
        <div className="itemDetails">
          <div className="container">
            <ProductImages product={product} />

            <ProductInfo product={product} />
          </div>
        </div>
      )}

      {loadingProducts ? (
        <SlidProductLoading />
      ) : (
        <SlidProduct
          key={product.category}
          data={relatedProducts}
          title={product.category.replace("-", " ")}
        />
      )}
    </div>
    </pageTransitionEvent>
   
  );
}
