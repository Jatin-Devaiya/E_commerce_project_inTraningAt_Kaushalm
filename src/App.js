import { Route, Routes } from "react-router";
import "./App.css";

import Homepage from "./components/pages/home/Homepage";
import Navbar from "./components/pages/navbar/Navbar";
import SingleProduct from "./components/pages/allProductList/SingleProduct";
import Err from "./components/pages/errorPage/Err";
import CategoryWiseProducts from "./components/pages/category/CategoryWiseProducts";
import SearchProduct from "./components/pages/searchProduct/SearchProduct";
import SubCategoryWiseProduct from "./components/pages/category/SubCategoryWiseProduct";
import SortProduct from "./components/pages/allProductList/SortProduct";
import AllProductListing from "./components/pages/allProductList/AllProductListing";
import RegistrationPage from "./components/pages/registration/RegistrationPage";
import LoginPage from "./components/pages/login/LoginPage";
import CartUI from "./components/pages/cart/CartUI";
import Footer from "./components/pages/footer/Footer";
import SaveItemsList from "./components/pages/whitelist/SaveItems";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categorys/:category" element={<CategoryWiseProducts />} />
        <Route path="/allproduct" element={<AllProductListing />} />
        <Route
          path="/subCategorys/:subCategory"
          element={<SubCategoryWiseProduct />}
        />
        <Route path="/sort/:sortkey" element={<SortProduct />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
        <Route path="*" element={<Err />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/searchProduct/:search" element={<SearchProduct />} />
        <Route path="/cartui" element={<CartUI />} />
        <Route path="/SaveItemsList" element={<SaveItemsList/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
