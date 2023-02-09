import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./sigleProduct.css";
const SingleProduct = () => {
    const { id } = useParams();
    const [singleProduct, SetSingleProduct] = useState();

    useEffect(() => {
        const fetchSingleProduct = async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            console.log(data);
            data && SetSingleProduct(data);
        };
        fetchSingleProduct();
    }, [id]);
    console.log(singleProduct);
    return (
        <div className="singleProduct">
            <img src={singleProduct?.thumbnail} alt={singleProduct?.title} />
            <span>{singleProduct?.title}</span>
            <span>brand: {singleProduct?.brand}</span>
            <span>price : {singleProduct?.price}</span>
        </div>
    );
};

export default SingleProduct;
