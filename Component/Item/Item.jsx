import React, { useContext } from "react";
import { Context } from "../../Context/cart-context";
import './Item.css'


export default function Item({ item }) {
    const {CartData,SetCartData} = useContext(Context);
    console.log(CartData)
    return <>
        <section className="card">
            <img className="card-image" src={item?.Image} alt="image" />
            <article className="card-title">{item.Title}</article>
            <article className="card-description">{item.Description}</article>
            <section className="card-footer">
                <section className="price">{item.Price}</section>
                <button className="cart-button" onClick={()=>{
                    SetCartData([...CartData,item])
                    window.alert("Added to Cart")
                }}  >Add to Cart</button>
            </section>
        </section>
    </>
}