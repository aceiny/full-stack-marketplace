import React from "react";
import {FaFacebookF} from "react-icons/fa";
const FacebookAuth = ({type}) => {
    return(
        <div className=" cursor-pointer shadow-md flex items-center gap-[15px] border border-solid border-[#35CCED] rounded-[10px] pl-[15px] h-[50px] w-[262px] bg-white">
            <FaFacebookF className="text-[22px]"/>
            <p className="text-[18px] font-[300]">{type} with Facebook</p>
        </div>
    )
}
export default FacebookAuth;