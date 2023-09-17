import React from "react";
import logo from "../../assets/images/logo.svg";
import { Sidebar } from "../../data/adminData";
import {PiSignOutBold} from "react-icons/pi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../../store/reducers/admin";
const SideBar = () => {
    const dispatch = useDispatch();
    const handleSignout = () => {
        dispatch(signout())
    }
    return (
        <div className="flex flex-col gap-[65px] bg-white py-10 px-8 min-w-[260px] h-[100vh]">
            <img src={logo} className="w-[150px] -translate-x-2" alt="logo" />
            <div className=" h-full flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                    {
                        Sidebar.map((v, i) => {
                            return (
                                <div key={i} className="flex gap-3 text-[#131313c0] items-center transition-half hover:text-[#0B63F8]">
                                    {v.icon}
                                    <Link to={v.link} className=" text-[16px] font-[400] " >{v.name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cursor-pointer transition-half flex py-2 rounded-[10px] items-center justify-center gap-3 border border-solid border-[#131313c0] text-[#131313c0] hover:text-white hover:bg-[#FA3434] hover:border-transparent ">
                    <PiSignOutBold className=""/>
                    <button onClick={handleSignout}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}
/*import React from "react";
import logo from "../../assets/images/logo.svg";
import { Sidebar } from "../../data/adminData";
const SideBar = () => {
    return (
        <div className="flex flex-col gap-10 bg-white py-10 px-8 w-[250px] h-[100vh]">
            <img src={logo} className="w-[150px]" alt="logo" />
            <div className="flex flex-col gap-6">
                {
                    Sidebar.map((v, i) => {
                        return (
                            <div key={i} className="flex gap-2 text-[#131313c0] items-center transition-all hover:text-[#0B63F8]">
                                {v.icon}
                                <a href={v.link} className=" text-[16px] font-[400] " >{v.name}</a>
                            </div>
                        )
                    })
                }
            </div>
            <div className=" bg-red-200 flex flex-col items-start justify-end h-full">
                <button>Sign Out</button>
            </div>
        </div>
    )
}
export default SideBar;*/
export default SideBar;