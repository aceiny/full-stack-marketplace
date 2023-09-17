import React from "react";
import SideBar from "../comps/SideBar";
import AllProducts from "../comps/ProductsTable";
import AdminMidTop from "../comps/AdminMidTop";
const AllProductsAdmin = () => {
    return(
        <>
        <div className="flex bg-[#F2F2F2]">
                <SideBar/>
                <div className="mt-[50px] px-[41px] w-full flex flex-col gap-[40px]">
                    <AdminMidTop/>
                    <div>
                        <AllProducts/>
                    </div>
                </div>
                
            </div>
        </>

    )
}
/*            */
export default AllProductsAdmin;