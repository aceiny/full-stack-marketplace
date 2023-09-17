import React from "react";
import { useDispatch } from "react-redux";
import { removefromCart } from "../store/reducers/products";
const CartProductCard = ({cover,id,name,price,description}) => {
    const dispatch = useDispatch();
    const handledelete = () => {
        dispatch(removefromCart(id))
    }
    return (
        <div className="cart-product-one w-[800px] flex gap-2 items-start">
            <div>
                <img src={cover} className=" object-contain w-[70px] h-[70px] rounded-[6px] border border-solid border-[#8b96a56c]" alt="ProductImage" />
            </div>
            <div className="w-full flex flex-col gap-[8px]">
                <div className="flex w-full justify-between text-[16px] text-[#1c1c1c] font-[500]">
                    <span>{name}</span>
                    <span>{price}$</span>
                </div>
                <div className="text-[16px] text-gray-500 font-[400]">
                    <span>{description}</span>
                </div>
                <div className="mt-[6px]">
                    <button className=" text-[#FA3434] text h-[30px] px-[10px] shadow rounded-[6px]" onClick={handledelete}>Remove</button>
                </div>
            </div>
        </div>
    )
}
export default CartProductCard