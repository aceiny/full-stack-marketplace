import React from "react";
import logo from "../../assets/images/logo.svg";
import {data,socials} from "../../data/footer";
import flag from "../../assets/images/usa.svg";
const Footer = () => {
    return (
        <>
            <div className="footer flex justify-between items-start px-[130px] pt-[40px] pb-[50px]">
                <div className="flex flex-col gap-4 justify-center">
                    <img src={logo} alt="logo" className="w-[150px]"/>
                    <p className="w-[300px]">Best information about the company gies here but now lorem ipsum is</p>
                    <div className="flex items-center gap-4 text-[24px]  text-gray-500">
                        {
                            socials.map((v,i)=>{
                                return (
                                    <a href={v.link} alt ={v.name} key={i} >{v.icon}</a>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    data.map((v,i)=>{
                        return (
                            <div key={i} className="flex flex-col gap-2">
                                <h1 className="font-[500] text-[16px] text-[#1c1c1c]">{v.name}</h1>
                                <div className="flex flex-col gap-1">
                                    {
                                        v.data.map((v,i)=>{
                                            return (
                                                    <a href={v.link} key={i} className="text-[16px] text-gray-500 font-[400] transition-all hover:text-blue-600">{v.name}</a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            <div className="footer-down flex items-center justify-between px-[130px] py-[21px] bg-gray-300 text-[16px] text-gray-800 font-[400]">
                <span className="">© 2023 Ecommerce. </span>
                <div className="flex gap-2">
                    <img src={flag} alt="" />
                    <span>English</span>
                </div>
            </div>
        </>
    )
}
export default Footer;