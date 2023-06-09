// Provider
//Consumer
import React from "react";

import { useState } from "react";





const Context = React.createContext();

const CartProvider = (props) => {
    const [CartData,SetCartData]=useState([])
   
    return <Context.Provider value={{CartData,SetCartData}} >
        {props.children}
    </Context.Provider>
}


export { Context, CartProvider };
/*
function CartContext() {
    const [CartData, SetCartData] = useState([]);
    return <>
        <Main CartData={CartData} AddtoCart={AddtoCart} />
        <Cart CartData={CartData} />
    </>
}*/