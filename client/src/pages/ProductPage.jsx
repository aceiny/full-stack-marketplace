import React, { useEffect , useState } from "react";
import Header from "../comps/utilitis/header";
import Navbar from "../comps/utilitis/navbar";
import Footer from "../comps/utilitis/footer";
import {FaCheck} from "react-icons/fa";
import Rating from "../comps/starrating";
import { useParams } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { getProduct ,addtoCart,removefromCart } from "../store/reducers/products";
const ProductPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [incart, setincart] = useState(false)
    const cart = useSelector(state => state.products.usercart)
    const product = useSelector(state => state.products.product)
    const getProductData = async () => {
        dispatch(getProduct(id))
    }
    const addtocartHandler = async() => {
        if (incart) {
            await dispatch(removefromCart(id))
            setincart(false)
        }
        else {
            await dispatch(addtoCart(id))
            setincart(true)}
    }
    useEffect(() => {
        getProductData();
    },[])
    useEffect(()=>{
        cart.map((product)=>{
            if(product._id === id) {
                setincart(true)
            }
        })
    },[cart])
    return (
        <>
        <Header/>
        <Navbar/>
            <div className=" flex w-full justify-center">
              {
                    product && <div className="flex  gap-6 mt-[100px] mb-[120px] px-[40px] py-[60px] rounded-[30px] border-solid border border-[#127FFF]">
                    <div className="productImages flex-col ">
                            <img src={product.productimages} className="w-[400px] max-h-[450px] rounded-[6px] object-cover" alt="" />
                        </div>
                        <div className="flex flex-col gap-5 w-fit pl-4">
                            <h1 className="text-[20px] font-[600] text-[#1c1c1c] w-[384px]">{product.name}</h1>
                            <div className="flex items-center gap-6">
                                <Rating rating={product.rating}/> 
                                <span className="text-[16px] font-[600] text-[#787a80]">0 sold</span>
                            </div>
                            <div className="product-second-details flex flex-col">
                                <span className=" capitalize font-[700] text-[32px] text-[#5b5b5b]">{product.price}DA</span>
                                {product.quantity>=1
                                ? <div className="text-[#00B517] flex gap-1 items-center"><FaCheck/><span>In Stock</span></div>
                                : <div className="text-[#FA3434] flex gap-1 items-center"><FaCheck/><span>Out of Stock</span></div>}
                            </div>
                            <div className="w-[600px] flex flex-col gap-1">
                                <div className="flex gap-6">
                                    <div className="flex flex-col gap-2 text-gray-500 text-[16px] font-[400]">
                                        <span>Protection : </span>
                                        <span>Warranty : </span>
                                        <span>Description : </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Refund Policy</span>
                                        <span>2 years full warranty </span>
                                    </div>
                                </div>
                                <span>{product.description}</span>
                            </div>
                            <div className="flex gap-5 mt-4">
                                <button className="blue-button px-[46px] h-[56px] text-white">Buy Now</button>
                                <button className="this-button px-[46px] h-[56px]" onClick={addtocartHandler}>
                                    {
                                        incart?"Remove from Cart":"Add to Cart"
                                    }
                                    </button>
                            </div>
                        </div>
    
                    </div>
              }
            </div>
            <Footer/>
        </>
    )
}

export default ProductPage;