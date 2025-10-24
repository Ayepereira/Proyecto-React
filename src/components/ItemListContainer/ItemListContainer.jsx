import { useState,useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
export const ItemListContainer = ({titulo,productos}) => {
const [products, setProducts] = useState([])

useEffect(()=>{
    fetch("/data/products.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
    })
    .then((data) => {
        setProducts(data);
    })
    .catch((err) => {
        console.log(err);
    });
},[]);

    return (
    <section>
        <h3>{titulo} </h3>
        <ItemList lista={products} />
    </section>

    );
    
};