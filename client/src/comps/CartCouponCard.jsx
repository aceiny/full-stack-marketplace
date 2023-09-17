import React from "react";
const CartCouponCard = () => {
    return (
        <div className="cart-coupon-card flex flex-col gap-3">
            <span>Have a coupon ?</span>
            <div className="flex items-center">
                <input type="text" placeholder="Add coupon" className=" pl-[10px] h-[40px] outline-none"/>
                <button className="text-[#0D6EFD] px-2 h-[40px]">Apply</button>
            </div>
        </div>
    )
}
export default CartCouponCard