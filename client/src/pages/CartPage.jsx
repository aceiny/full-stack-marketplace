import React, { useEffect , useState } from "react";
import Header from "../comps/utilitis/header";
import Footer from "../comps/utilitis/footer";
import CartProductCard from "../comps/CartProductCard";
import {MdArrowBackIosNew} from "react-icons/md";
import CartCouponCard from "../comps/CartCouponCard";
import CartCheckoutCard from "../comps/CartCheckoutCard";
import { getCart , cleareCart } from "../store/reducers/products";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const CartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.products.usercart)
    const [total,setTotal] = useState(0)
    const clearecartHandler = () => {
        dispatch(cleareCart())
    }
    useEffect(() => {
        dispatch(getCart());
    }, []);
    useEffect(() => {
        if (cart) {
            const countTotal = cart.reduce((acc, product) => acc + product.price, 0);
            setTotal(countTotal);
        }
    }, [cart]);
    return (
        <>
        <Header/>
        <div className="w-full flex justify-center my-[70px]">
            <div className="flex flex-col gap-[23px] items-start">
                <h1 className="text-[#1c1c1c] text-[24px] font-[600]">My cart {cart.length}</h1>
                <div className="flex items-start justify-center gap-[20px]"> 
                    <div className="cart-products rounded-[6px] border border-solid border-[#8b96a588] min-w-[800px] px-[20px] pb-[21px]">
                        {
                            cart.length == 0 
                            ? <div className="w-full flex justify-center mt-3"><h1 className="text-[#1c1c1c] text-[24px] font-[600] ">No Products in cart</h1></div>
                            : cart.map((product) => {
                                return(
                                   <div key={product._id}> <CartProductCard id={product._id} cover={product.productimages[0]} name={product.name} price={product.price} description={product.description}/></div>
                                )
                            })
                        }
                        <div className="flex justify-between items-center mt-[20px]">
                            <Link to="/products"><button className="cart-button-blue"><MdArrowBackIosNew/>Back to Shop</button></Link>
                            <button className="cart-button-white" onClick={clearecartHandler}>Remove all</button>
                        </div>  
                    </div>
                    <div className="cart-checkout">
                        <CartCouponCard/>
                        <CartCheckoutCard total={total}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default CartPage /*import React, { useEffect } from "react";
import Header from "../comps/utilitis/header";
import Footer from "../comps/utilitis/footer";
import CartProductCard from "../comps/CartProductCard";
import {MdArrowBackIosNew} from "react-icons/md";
import CartCouponCard from "../comps/CartCouponCard";
import CartCheckoutCard from "../comps/CartCheckoutCard";
import { useSelector,useDispatch } from "react-redux";
const CartPage = () => {
    useEffect(()=>{
        const cart = useSelector(state => state.auth.userData)
    },[])
    return (
        <>
        <Header/>
        <div className="w-full flex justify-center my-[70px]">
            <div className="flex flex-col gap-[23px] items-start">
                <h1 className="text-[#1c1c1c] text-[24px] font-[600]">My cart (30)</h1>
                <div className="flex items-start justify-center gap-[20px]"> 
                    <div className="cart-products rounded-[6px] border border-solid border-[#8b96a588] px-[20px] pb-[21px]">
                        <CartProductCard/>
                        <CartProductCard/>
                        <CartProductCard/>
                        <div className="flex justify-between items-center mt-[20px]">
                            <button className="cart-button-blue"><MdArrowBackIosNew/>Back to Shop</button>
                            <button className="cart-button-white">Remove all</button>
                        </div>
                    </div>
                    <div className="cart-checkout">
                        <CartCouponCard/>
                        <CartCheckoutCard/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default CartPage*/