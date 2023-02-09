import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./comonents/login/Login";
import Products from "./comonents/products/Products";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
