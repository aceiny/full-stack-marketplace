import React from "react";
import logo from "../../assets/images/logo.svg";
import {right} from "../../data/navbarData";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { getAllproducts } from "../../store/reducers/products";
import { signout } from "../../store/reducers/auth";
const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.loggedIn)
    const SignOut = () => {
        dispatch(signout())
    }
    const searchForProduct = (e) => {
        console.log(e.target.value)
        dispatch(getAllproducts(`name=${e.target.value}`))
    }
    return (
        <div className="bg-white px-[130px] nav-header flex justify-between items-center py-[22px]">
            <div>
                <Link to="/products"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-mid flex items-center justify-center">
                <input type="text" 
                placeholder="Search..."
                onChange={searchForProduct}
                className=" outline-none pl-[10px] py-[10px] text-[16px] font-[400] text-[#8B96A5]"
                />
                <button className="bg-[#127FFF] text-white text-[16px] font-[400] p-[10px] rounded-r-[6px]">Search</button>

            </div>
            <div className="flex items-center gap-6">
                {
                    right.map((v,i)=> {
                        return (
                            <div key={i} className="flex flex-col justify-center items-center gap-1 text-[#8B96A5]">
                                <Link to={v.link} className="text-[18px]">{v.icon}</Link>
                                <Link to={v.link} className=" text-[14px] font-[400]">{v.name}</Link>
                            </div>
                        )
                    })
                }
                {isAuth
                ?<button className=" border border-solid border-red-600 px-3 py-2 rounded-lg hover:bg-red-500 hover:border-transparent hover:text-white transition-half" onClick={SignOut}>Sign Out</button>
                :<></>
                }
            </div>
        </div>
    )
}
export default Header;