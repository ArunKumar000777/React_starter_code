import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./comonents/login/Login";
import Products from "./comonents/products/Products";
import Product from "./comonents/productDetail/Product";
import SingleProduct from './comonents/singleProduct/SingleProduct'
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    {/* <Route path="/product/:id" element={</>} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
