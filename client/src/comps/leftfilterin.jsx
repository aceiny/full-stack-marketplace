import React, { useState } from "react";
import {Ratings } from "../data/filterdata";
import Rating from "./starrating";
import { useDispatch } from "react-redux";
import { getAllproducts } from "../store/reducers/products";
const LeftFilterIn = () => {
    const [selectedRating,setSelectedRating] = useState('')
    const dispatch = useDispatch();
    const handleRating = (e) => {
        dispatch(getAllproducts(`numerics=rating>=${e.target.value}`))
    }
    return (
        <div>
            <div className="w-[230px] left-filter-sec flex flex-col gap-[20px]">
                <h1 className="text-[16px] font-[600] text-[#1c1c1c]">Rating</h1>
                <div className="flex flex-col gap-[12px] text-[#505050] text-[16px] font-[400]">
                    {
                    Ratings.map((v,i)=>{
                        return (
                            <div key={i} className="flex gap-1">
                                <input type="radio"
                                    value={v}
                                    name="rating"
                                    onChange={handleRating}
                                    />
                                <Rating rating={v}/>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default LeftFilterIn