import React from "react";
import {MdOutlineStarPurple500} from "react-icons/md";
const Rating = ({rating=0}) => {
    const floatRating = parseFloat(rating)
    rating = Math.round(rating)
    if(rating>5) rating = 5;
    const left = 5-rating
    return (
        <div className="flex gap-2">
            <div className="flex text-[20px]">
                {
                    [...Array(rating)].map((v,i)=>{
                        return (<div key={i}>
                            <MdOutlineStarPurple500 className="text-[#FF9017]"/>
                                </div>)
                    })
                }
                {
                    [...Array(left)].map((v,i)=>{
                        return (<div key={i}>
                            <MdOutlineStarPurple500 className="text-[#D4CDC5]"/>
                                </div>)
                    })
                }
            </div>
            <span className="text-[#FF9017] text-[18px] -translate-y-[2px] font-[600] ">{floatRating}</span>
        </div>
    )
}
export default Rating;