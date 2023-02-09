import { computeHeadingLevel } from "@testing-library/react";
import { useParams } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {
    //    const {id} = useParams()
    //    console.log(id)
    //     console.log(product);
    return (
        <div className="single_Product">
            <div className="single_product_container">
                <img src={product?.thumbnail} alt={product?.title} />
                <span>{product?.title}</span>
            </div>
        </div>
    );
};

export default Product;
