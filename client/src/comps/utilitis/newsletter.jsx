import React from "react";
import {MdOutlineEmail} from "react-icons/md";
const NewsLetter = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-1 py-[36px] bg-gray-200 mt-[120px]">
            <span className="text-[20px] font-[600] text-[#1c1c1c]">Subscribe on our newsletter</span>
            <span>Get daily news on upcoming offers from many suppliers all over the world</span>
            <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center bg-white text-gray-500 pl-[8px] h-[40px] rounded-[6px]">
                    <MdOutlineEmail className=" bg-transparent text-[22px]"/>
                    <input type="text"
                     className=" bg-transparent w-full h-full pl-[6px] font-[400] text-[16px] outline-none"
                     placeholder="Email"
                        />
                </div>
                <button className="blue-button px-[16px] h-[40px] text-white">Subscribe</button>
            </div>
        </div>
    )
}
export default NewsLetter;