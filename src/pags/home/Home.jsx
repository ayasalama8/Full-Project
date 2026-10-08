import React, { useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlidProduct from "../../components/slidProduct/slidProduct";
import "./home.css";
import { useEffect } from "react";
import SlidProductLoading from "../../components/slidProduct/slidProductLoading";
import PageTransition from "../../components/pageTransition";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];
export default function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (cat) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${cat}`,
            );
            const data = await res.json();
            return { [cat]: data.products };
          }),
        );

        const productData = Object.assign({}, ...results);
        setProducts(productData);
      } catch (err) {
        console.err("some thing want wrong", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <PageTransition>
      <div>
        <HeroSlider />

        {loading
          ? categories.map((ca) => <SlidProductLoading key={ca} />)
          : categories.map((cat) => (
              <SlidProduct
                key={cat}
                title={cat.replace("-", " ")}
                data={products[cat]}
              />
            ))}
      </div>
    </PageTransition>
  );
}
