import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducts } from "../../store/reducers/products";
const AllProducts = ({ product }) => {
    const products = useSelector(state => state.products.allproducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllproducts())
    }, [])
    return(
        <> 
        <div className="bg-white product-table-card-content flex gap-7 justify-between w-full rounded ">
            <div className="flex flex-col justify-between">
                <div className="text-[22px] font-[600]">Id</div>
                {
                    products && products.map((product) => {
                        return(
                            <div>{product._id}</div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col justify-between">
                <div className="text-[22px] font-[600]">Name</div>
                {
                    products && products.map((product) => {
                        return(
                            <div>{product.name}</div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col justify-between">
                <div className="text-[22px] font-[600]">Price</div>
                {
                    products && products.map((product) => {
                        return(
                            <div>{product.price}</div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col justify-between">
                <div className="text-[22px] font-[600]">Quantity</div>
                {
                    products && products.map((product) => { 
                        return(
                            <div>{product.quantity}</div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col justify-between">
                <div className="text-[22px] font-[600]">CreatedAt</div>
                {
                    products && products.map((product) => {
                        return(
                            <div>{product.createdAt}</div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default AllProducts;