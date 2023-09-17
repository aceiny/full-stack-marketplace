import React, { useEffect } from "react";
import ProductCard from "./productcard";
import { useSelector,useDispatch } from "react-redux";
import { getAllproducts } from "../store/reducers/products";
import { getCart } from "../store/reducers/products";
const Products = () => {
    const products = useSelector(state => state.products.allproducts)
    const loading = useSelector(state => state.products.loading)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllproducts())
    },[])
    useEffect(() => {
        dispatch(getCart())
    },[])
    return (
        <div className="products-container">
            
            {
                loading?
                <div className="w-full flex justify-center">
                    <lord-icon
                    src="https://cdn.lordicon.com/ulhdumaq.json"
                    trigger="loop"
                    colors="primary:#4030e8,secondary:#08a88a"
                    stroke="90"
                    style={{ width: '250px', height: '250px'}}/>
                </div>
        
                : products && products.map((product) => {
                    return(
                        <ProductCard cover={product.productimages[0]} id={product._id} name={product.name} rating={product.rating} price={product.price}/>
                    )
                })
            }
        </div>
    )
}
export default Products;