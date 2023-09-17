import React from "react";
import PaymentMethods from "./PaymentMethods";
const CartCheckoutCard = ({total}) => {
    return (
        <div className="cart-checkout-card px-[20px] mt-3">
            <div className="checkout-card-top-section">
                <div className="flex justify-between">
                    <span className="text-[16px] font-[400] text-gray-600">Subtotal</span>
                    <span className="text-[16px] font-[400] text-gray-600">${total}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[16px] font-[400] text-gray-600">Discount</span>
                    <span className="text-[16px] font-[400] text-[#FA3434]">- $0</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[16px] font-[400] text-gray-600">Tax</span>
                    <span className="text-[16px] font-[400] text-[#00B517]">+ $0</span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-5 w-full flex justify-between items-center font-[600] text-[#1c1c1c]">
                    <span className="text-[16px]">Total</span>
                    <span className="text-[20px]">${total}</span>
                </div>
                <button className="bg-[#00B517] mt-[25px] text-[white] px-[20px] h-[54px] w-full rounded-[8px]">Checkout</button>
                <div className="mt-[18px]">
                    <PaymentMethods/>
                </div>
            </div>
            
        </div>
    )
}
export default CartCheckoutCard