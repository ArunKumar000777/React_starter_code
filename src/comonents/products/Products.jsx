import { useEffect, useState } from "react";
import "./products.css";
import Product from "../productDetail/Product";
import { Link } from "react-router-dom";
const Products = () => {
    const [products, setProducts] = useState("");
    useEffect(() => {
        const fetchProducts = async () => {
            const result = await fetch("https://dummyjson.com/products?limit=10&skip=50");
            const data = await result.json();
            data && setProducts(data?.products);
            // console.log(data);
        };
        fetchProducts();
    }, []);
    console.log(products);
    return (
        <div className="container">
            <h1>our products</h1>
            <div className="products">
                {products &&
                    products.map((product) => {
                        return (
                            // <div key={product.id} className="products__single">
                            //     <img src={product.thumbnail} alt={product.title} />
                            //     <span>{product.title}</span>
                            // </div>
                            <Link to={`/product/${product?.id}`}>
                                <Product key={product?.id} product={product} />
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default Products;
