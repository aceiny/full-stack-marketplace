import React from "react";
import {useState} from "react"
import {BsCartPlus} from "react-icons/bs"
import Rating from "./starrating";
import { useSelector,useDispatch } from "react-redux";
import { addtoCart,removefromCart } from "../store/reducers/products";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({id,name,price,rating,cover}) => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [incart, setincart] = useState(false)
    const cart = useSelector(state => state.products.usercart)
    const addtocartHandler = () => {
        if (incart) {
            dispatch(removefromCart(id))
            setincart(false)
        }
        else {
            dispatch(addtoCart(id))
            setincart(true)}
    }
    useEffect(()=>{
        cart.map((product)=>{
            if(product._id === id) {
                setincart(true)
            }
        })
    },[cart])
    const goToProductPage = () => {
        Navigate(`/products/${id}`)
    }
    return (
        <div className="product-card w-[295px] h-[405px] bg-white flex flex-col items-start rounded-[6px] ">
            <div className=" min-h-[260px] w-[295px]  product-card-image cursor-pointer" onClick={goToProductPage}>
                <img src={cover} className="product-card-image w-full h-full rounded-[6px] " alt="" />
            </div>
            <div className="product-details  relative flex flex-col gap-1 pl-[18px] pt-[11px] w-full h-full overflow-hidden">
                <div 
                    className={`addtocart flex justify-center items-center cursor-pointer shadow-md absolute w-[40px] h-[40px] top-5 right-5 ${incart?"bg-green-500 text-white":""}`} 
                    onClick={addtocartHandler}>
                        <BsCartPlus className=" text-[20px]"/>
                </div>
                <span className="text-[#1c1c1c] text-[19px] font-[600] cursor-pointer" onClick={goToProductPage}>${price}</span>
                <Rating rating={rating}/>
                <span className=" text-gray-800 text-[15px] font-[400] w-[215px] cursor-pointer" onClick={goToProductPage}>{name}</span>
            </div>
        </div>
    )
}
export default ProductCard;