import React from "react";
import Header from "../comps/utilitis/header";
import Navbar from "../comps/utilitis/navbar";
import Footer from "../comps/utilitis/footer";
import Products from "../comps/productsContainer";
import FitlerMid from "../comps/midfilter";
import LeftFilterIn from "../comps/leftfilterin";
import NewsLetter from "../comps/utilitis/newsletter";
const ProductsPage = () => {
    return (
        <>
        <Header/>
        <Navbar/>
        <div className="px-[130px] mt-10 flex gap-10">
            <LeftFilterIn/>
            <div className="flex flex-col gap-6">
                <FitlerMid/>
                <Products/>
            </div>
        </div>
        <NewsLetter/>
        <Footer/>
        </>
    )
}
export default ProductsPage;