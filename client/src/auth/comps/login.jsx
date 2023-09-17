import React , {useEffect, useState} from "react";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/reducers/auth";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.loggedIn);
    const [showPassword,setShowPassword] = useState(false);
    const passwordvisibility = () => {
        setShowPassword(!showPassword)
    }
    const [username,setUsername] = useState(""); const usernameHandler = (e) => {setUsername(e.target.value)}
    const [password,setPassword] = useState(""); const passwordHandler = (e) => {setPassword(e.target.value)}
    const handleLogin = async () => {
        const data = {
            username,
            password
        }
        await dispatch(fetchUser(data))
    }
    return (
        <div className="flex flex-col gap-12 px-[40px] py-[67px]">
                <h1 className="text-[36px] font-[700]">Sign in to your Account</h1>
                <div className="flex gap-[68px]">
                    <GoogleAuth type="Sign in"/>
                    <FacebookAuth type="Sign in"/>
                </div>
                <div className=" flex justify-center w-full">
                    <div className="flex flex-col gap-[15px] items-start">
                        <div className="flex flex-col gap-9 items-center">
                                <input type="text" placeholder="Username" className="self-start border-bottom font-[500] py-[5px] outline-none w-[470px]" onChange={usernameHandler}/>
                                <div className="flex items-center">
                                    <input type={showPassword?"text":"password"} onChange={passwordHandler} placeholder="Password" className=" border-bottom font-[500] py-[5px] outline-none w-[470px]" />
                                    {showPassword?<AiOutlineEye onClick={passwordvisibility} className="text-[26px] cursor-pointer"/>:<AiOutlineEyeInvisible onClick={passwordvisibility} className="text-[26px] cursor-pointer"/>}
                                </div>
                                <button className="text-[24px] font-[600] text-white bg-[#35CCED] py-[5px] w-[470px] rounded-xl " onClick={handleLogin}>Sign in</button>
                        </div>
                        <p className="text-[#c1c1c1] text-[13px] font-[300]">Dont have an Account <Link to="/signup"><span className="text-[#35CCED]">Sign Up</span></Link></p>
                    </div>
                </div>
            </div>
    )
}
export default Login;