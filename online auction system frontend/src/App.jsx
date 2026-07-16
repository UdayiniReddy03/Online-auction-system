import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";

import "./index.css";

function App() {

    return (

        <BrowserRouter>

            <div className="app">

                <Navbar />

                <main className="main-content">

                    <Routes>

                        <Route path="/" element={<Home />} />

                        <Route path="/login" element={<Login />} />

                        <Route path="/register" element={<Register />} />

                        <Route path="/dashboard" element={<Dashboard />} />

                        <Route path="/add-product" element={<AddProduct />} />

                        <Route path="/product/:id" element={<ProductDetails />} />

                    </Routes>

                </main>

                <Footer />

            </div>

        </BrowserRouter>

    );

}

export default App;