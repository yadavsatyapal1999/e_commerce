import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import './Header.css'

export default function Header() {
   const Navigate = useNavigate();
    return <>
        <nav className="Navbar">
            <section className="logo">Shop and Shop Game Sites</section>
            <section className="cart-icon" onClick={() => {
               Navigate('/cart')
            }} >
                <span>{/*CartData.length*/} </span>
                <i className='fa   fa-shopping-cart'></i>
            </section>
        </nav>
    </>
}