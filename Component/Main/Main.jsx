import { useEffect } from "react"
import axios from 'axios';
import { useState } from "react";
import Header from "../Header/Header";
import Item from "../Item/Item";
import './Main.css'

export default function Main() {

    const [Bestseller, Setbestseller] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:1337/Api/Best-sellers').then((bestseller) => {
            //console.log(bestseller.data.data)
            Setbestseller(bestseller.data.data)
        })

            .catch(() => {

            })
            .finally(() => {

            })
    }, [])

    return <>
        <Header />
        <section className="Wrapper" >
            <article>Best Seller</article>
            {Bestseller !== null ? Bestseller.map((item, key) => {
                return <Item item={item.attributes}  />
            })
                : <div>Hello</div>
            }

        </section>
    </>
}
