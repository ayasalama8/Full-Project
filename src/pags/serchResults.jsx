import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PageTransition from "../components/pageTransition";
import SlidProductLoading from "../components/slidProduct/slidProductLoading";
import Product from "../components/slidProduct/Product";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get("query");
  
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch (err) {
        console.log("searchEror", err);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);
 console.log(query)
  return (
    <PageTransition key={query}>
      <div className="category-products">
        {loading ? (
          <SlidProductLoading key={query} />
        ) : results.length > 0 ? (
          <div className="container">
            <div className="top-slid">
              <h2>
                Results for: {query}
              </h2>
              
            </div>

            <div className="products">
              {results.map((item, index) => (
                <Product  key={index} item={item} />
              ))}
            </div>
          </div>
        ): <div className="container">
            <p>No Results Found</p>
        </div>  }
      </div>
    </PageTransition>
  );
}
