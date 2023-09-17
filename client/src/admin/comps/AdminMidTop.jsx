import react from "react";
import pfp from "../../assets/images/profileImg.svg";
import {IoNotificationsOutline} from "react-icons/io5";
import {FiSearch} from "react-icons/fi";
const AdminMidTop = () => {
    return(
        <div className="flex flex-col gap-[44px]">
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

                <div className="flex flex-col gap-[24px]">
                    <h1 className="text-[24px] font-[500] ">Products Information</h1>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <p className="text-black font-[400]">Id</p>
                            <input type="text" placeholder="Search by id" className="w-[300px] h-[52px] rounded border border-solid border-[#00000046] px-[20px]"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-black font-[400]">Name</p>
                            <input type="text" placeholder="Search by name" className="w-[300px] h-[52px] rounded border border-solid border-[#00000046] px-[20px]"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-black font-[400]">Price</p>
                            <input type="text" placeholder="Search by price" className="w-[300px] h-[52px] rounded border border-solid border-[#00000046] px-[20px]"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-black font-[400]">Quantity</p>
                            <input type="text" placeholder="Search by quantity" className="w-[300px] h-[52px] rounded border border-solid border-[#00000046] px-[20px]"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default AdminMidTop;