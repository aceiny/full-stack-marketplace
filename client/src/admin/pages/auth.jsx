import React, { useState } from "react";
import Login from "../comps/login";
import img from "../../assets/images/auth.png";
import logo from "../../assets/images/authlogo.svg"
import Header from "../../comps/utilitis/header";
import tree from "../../assets/images/authcircle.svg";
const AdminAuth = () => {
    return(
<div className="bg-[#35CCED] min-h-screen">
        <Header/>
        <div className="flex justify-center mt-[100px] ">
            <div className="flex bg-white justify-center items-center border-[6px] border-solid border-white rounded-[30px]">
                <div className="h-full bg-[#35CCED] flex flex-col rounded-[30px] justify-between items-start w-[460px] pl-7 pt-[18px] ">
                <img src={logo} className="w-[55px] h-[55px] mb-[30px]" alt="" />
                    <p className="text-white text-[26px] font-[400] pl-4">Login in as admin</p>
                    <img src={img} className=" translate-x-16 translate-y-5 z-50  self-end" alt="" />
                    <img src={tree} className=" translate-x-[140px] w-[800px] self-end" alt="" />
                </div>
                <Login/>
            </div>
        </div>
        </div>
    )
}
export default AdminAuth;