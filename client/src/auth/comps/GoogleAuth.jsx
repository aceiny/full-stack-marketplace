import React from "react";
import {FcGoogle} from "react-icons/fc";
const GoogleAuth = ({type}) => {
    return(
        <div className=" cursor-pointer shadow-md flex items-center gap-[15px] border border-solid border-[#35CCED] rounded-[10px] pl-[15px] h-[50px] w-[262px] bg-white">
            <FcGoogle className="text-[22px]"/>
            <p className="text-[18px] font-[300]">{type} with Google</p>
        </div>
    )
}
export default GoogleAuth;