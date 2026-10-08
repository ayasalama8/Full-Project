import Home from "./pags/home/Home";
import BottomHeader from "./components/header/BottomHeader";
import TopHeader from "./components/header/TopHeader";
import { Route, Routes } from "react-router-dom";
import ProductDeatils from "./pags/ProductDetails/productDetail";
import Cart from "./pags/Allcrt/cart";
import { Toaster } from "react-hot-toast";
import ScrolToTop from "./components/scrolToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./pags/Category/categoryPage";
import SearchResults from "./pags/serchResults";
import Favorites from "./pags/favorites/favorites";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <ScrolToTop />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDeatils />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/category/:category" element={<CategoryPage />} />

        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
