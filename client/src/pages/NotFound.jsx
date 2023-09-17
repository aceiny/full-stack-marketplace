import React from "react";
import img from "../assets/images/Scarecrow.png";
const NotFound = () => {
    return(
        <div className="w-full text-center h-screen flex justify-center items-center flex-col sm:flex-row gap-5">
            <img src={img} alt="" className="min-w-[500px] w-[700px]" />
            <h1 className="text-[38px] font-[700]">This page doesnt exist <br/> or might be under development </h1>
        </div>
    )
}
export default NotFound;