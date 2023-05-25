import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Create from "./components/create/Create";
import FoodDetails from "./components/foodDetails/FoodDetails";
import FoodCatalog from "./components/foodCatalog/FoodCatalog";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import { useSelector } from "react-redux";

const App = () => {
  const { token } = useSelector((store) => store.auth);
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={token ? <Create /> : <Login />} />
          <Route path="/foods/:id" element={<FoodCatalog />} />
          <Route
            path="/food/:id"
            element={token ? <FoodDetails /> : <Login />}
          />
          <Route path="/cart" element={token ? <Cart /> : <Login />} />
          <Route path="/checkout" element={token ? <Checkout /> : <Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
