import React from "react";
import {downleft} from "../../data/navbarData";
const Navbar = () => {
    return(
        <div className="bg-white px-[130px] navbar-header py-[17px] flex justify-between">
            <div className="flex gap-6 text-[16px] font-[500]">
                <div><span>All category</span></div>
                {
                    downleft.map((v,i)=> {
                        return (
                            <div key={i} className="">
                                <a href={v.link} className="">{v.name}</a>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex gap-8" >
                <div>
                    <span>Eglish , USD</span>
                </div>
                <div>
                    Ship to
                </div>
            </div>
        </div>
    )
}
export default Navbar;