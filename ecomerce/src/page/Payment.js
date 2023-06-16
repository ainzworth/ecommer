import React from "react";
import './payment.css'
import { Display } from "../components/Display";
import { Button } from "../components/Button";
export const Payment = () => {
    // const cart = useSelector(state=>state.cart)
    return(
        <div className="container_payment">
            <div className="left">

                <Display></Display>
            </div>
            <div className="right">
                <div className="item_des">
                    <div className="title">City night</div>
                    <div className="price">100$</div>
                </div>
                <div className="total_price">
                    <hr></hr>
                    <div className="total">100$</div>
                    <Button bgColor="#CC2F19" content="PAY NOW" width="335px"></Button>
                </div>
            </div>
        </div>  
    )
}