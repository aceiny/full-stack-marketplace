import React from "react";
import AmericanExpress from "../assets/images/paymentMethodes/AmericanExpress.svg"
import MasterCard from "../assets/images/paymentMethodes/MasterCard.svg"
import Paypal from "../assets/images/paymentMethodes/Paypal.svg"
import VisaCard from "../assets/images/paymentMethodes/VisaCard.svg"
import ApplePay from "../assets/images/paymentMethodes/ApplePay.svg"
const PaymentMethods = () => {
    return(
        <div className="flex gap-4">
            <img src={AmericanExpress} alt="American Express" className=""/>
            <img src={MasterCard} alt="Master Card" className=""/>
            <img src={Paypal} alt="Paypal" className=""/>
            <img src={VisaCard} alt="Visa Card" className=""/>
            <img src={ApplePay} alt="Apple Pay" className=""/>
        </div>
    )
}
export default PaymentMethods