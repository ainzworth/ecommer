import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useSelector } from "react-redux";

export const Nav = () => {
    
    // const quantity = useSelector(state=>state.cart.quantity)
  
    return(
        <nav className="navbar">
                <img className="logo" src={require("../logo/logo.png")} alt="logo"/>
                <div className="nav_options">
                    <div className="dropdown">
                        Mua ban
                    </div>
                    <div className="dropdown">
                        Lam viec
                    </div>
                    <div className="dropdown">
                        Lop hoc
                    </div>
                </div>
                <input type="text" className="search_field" value="Search"/>
                <Link to="/login">
                    <input style={{cursor:'pointer'}} type="submit" value="Đăng nhập/Đăng ký" className="navbar_button"></input>
                </Link>
                {/* <div>Item in cart: {quantity}</div> */}
        </nav>
    )
}