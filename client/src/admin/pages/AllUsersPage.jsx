import React from "react";
import SideBar from "../comps/SideBar";
import AllUsers from "../comps/UsersTable";
import pfp from "../../assets/images/profileImg.svg";
import {IoNotificationsOutline} from "react-icons/io5";
import {FiSearch} from "react-icons/fi";
const AllUsersPage = () => {
    return(
        <>
            <div className="bg-[#F2F2F2] flex">
                <SideBar/>
                <div className="w-full flex flex-col mt-[50px] px-[40px] gap-[40px]">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-[#ADA7A7] bg-white rounded border border-solid - border-[#00000046] h-[52px] w-[655px] px-[20px]">
                            <FiSearch/>
                            <input type="text" placeholder="Search..." className="h-full w-full outline-none px-4" />
                        </div>
                        <div className="flex gap-[20px] items-center">
                            <button className="w-[52px] h-[52px] rounded bg-white flex justify-center items-center text-[26px] text-[#ada7a7]"><IoNotificationsOutline/></button>
                            <img src={pfp}alt="profle picture" className="w-[52px] h-[52px] rounded-[10px]" />
                        </div>
                    </div>

                    <AllUsers/>
                </div>
            </div>
        </>
    )
}
export default AllUsersPage;