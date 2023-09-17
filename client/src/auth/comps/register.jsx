import React , {useState} from "react";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth"
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { signupUser } from "../../store/reducers/auth";
import { Link } from "react-router-dom";
const Register = () => {
    const [showPassword,setShowPassword] = useState(false);
    const passwordvisibility = () => {
        setShowPassword(!showPassword)}
    const dispatch = useDispatch();
    const [fullname,setName] = useState(""); const nameHandler = (e) => {setName(e.target.value)}
    const [username,setUsername] = useState(""); const usernameHandler = (e) => {setUsername(e.target.value)}
    const [email,setEmail] = useState(""); const emailHandler = (e) => {setEmail(e.target.value)}
    const [password,setPassword] = useState(""); const passwordHandler = (e) => {setPassword(e.target.value)}
    const handleSignup = () => {
        const data = {
            fullname,
            username,
            email,
            password
        }
        dispatch(signupUser(data))
    }
    return(
        <>
           <div className="flex flex-col gap-12 px-[40px] py-[67px]">
                <h1 className="text-[36px] font-[700]">Create Account</h1>
                <div className="flex gap-[68px]">
                    <GoogleAuth type="Sign Up"/>
                    <FacebookAuth type="Sign Up"/>
                </div>
                <div className=" flex justify-center w-full">
                    <div className="flex flex-col gap-[15px] items-start">
                        <div className="flex flex-col gap-9 items-center">
                                <input type="text" placeholder="Full Name" name="full Name" className="self-start border-bottom font-[500] py-[5px] outline-none w-[470px]" onChange={nameHandler}/>
                                <input type="text" placeholder="Username" name="full Name" className="self-start border-bottom font-[500] py-[5px] outline-none w-[470px]" onChange={usernameHandler}/>
                                <input type="text" placeholder="Email Adress" className="self-start border-bottom font-[500] py-[5px] outline-none w-[470px]" onChange={emailHandler}/>
                                <div className="flex items-center self-end">
                                <input type={showPassword?"text":"password"} placeholder="Password" className=" border-bottom font-[500] py-[5px] outline-none w-[470px]" onChange={passwordHandler}/>
                                    {showPassword?<AiOutlineEye onClick={passwordvisibility} className="text-[26px] cursor-pointer"/>:<AiOutlineEyeInvisible onClick={passwordvisibility} className="text-[26px] cursor-pointer"/>}
                                </div>
                                <button className="text-[24px] font-[600] text-white bg-[#35CCED] py-[5px] w-[470px] rounded-xl" onClick={handleSignup}>Create Account</button>
                        </div>
                        <p className="text-[#c1c1c1] text-[13px] font-[300]">Already have an Account <Link to="/login"><span className="text-[#35CCED]">Sign In</span></Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;