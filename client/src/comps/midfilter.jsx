import React from "react";
import { useSelector } from "react-redux";
const FitlerMid = () => {
    const productsNumber = useSelector(state => state.products.allproducts.length)
   return (
        <div className="flex justify-between bg-white py-[23px] px-[20px] rounded-[6px] border border-solid border-[##8b96a55e]">
        <div className="flex text-[16px] text-[#1c1c1c] gap-[6px]">
            <span className=" font-[400]">{productsNumber} items in</span>
            <span className=" font-[600]">inventory</span>
        </div>
        <div className="flex gap-3 text-[16px] text-[#1c1c1c]">
            <input type="checkbox" checked/>
            <span className="font-[400]">Verified Only</span>
            <select name="" id="" placeholder="Featured">
                <option value="">Featured</option>
            </select>
        </div>
        </div>
   )
}
export default FitlerMid;