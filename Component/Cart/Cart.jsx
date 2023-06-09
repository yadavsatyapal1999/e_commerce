import { useCallback, useContext } from "react";
import { useRef } from "react";
import useRazorpay from "react-razorpay";
import { Context } from "../../Context/cart-context";
import Item from "../Item/Item";

export default function Cart() {

    const { CartData, SetCartData } = useContext(Context);

    const total = useRef();
    const Razorpay = useRazorpay();
    const RazorpayDisplay = useCallback(async (total) => {

        const options = {
            key: "rzp_test_ieJLxTp5HChh8d",
            amount: "50000",
            currency: "INR",
            name: "SHOP and SHOP Game",
            description: "Game related Transcation",
            handler: (res) => {
                console.log(res)
            },
            prefill: {
                name: "Satyapal Yadav",
                email: "satyapal.mechworld@gmail.com",
                contact: "9407800962"
            },
            notes: {
                address: "Random Adress"
            },
            theme: {
                color: "#3399cc",
            }
        }
        const rzp1 = new Razorpay(options);
        rzp1.open();
    }, [Razorpay])
    return <>
        <section className="Cart">
            {CartData != null || CartData != undefined ? CartData.map((CartItem) => {
                return <>

                    <img className="image" src="" alt="" />
                    <article   >{CartItem.Title}</article>
                    <article className="Price" >{CartItem.Price}</article>
                    <button className="btn" onClick={() => {
                       window.alert("trying to remove from Cart")
                    }}  >Remove from Cart</button>

                </>
            }) : <></>}
        </section>
        <section>
            <button onClick={() => {
                RazorpayDisplay(total);
            }} >Checkout</button>
        </section>
    </>
}