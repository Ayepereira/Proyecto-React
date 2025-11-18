import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider=({children})=>{
const [cart,setCart]=useState([])

const exists=(id)=>{
    const exist=cart.some((p)=>p.id===id);
    return exist;
}

// agregar al carrito
const addItem=(item)=>{

                if (exists(item.id)){
                    const updateCart = cart.map ((prod)=>{
                        if (prod.id === item.id){
                            return {...prod, quantity: prod.quantity + item.quantity };
                        } else {
                            return prod;
                        }
                    });
                    setCart(updateCart);
                    alert (`Agregado al carrito`);
                } else{
                    setCart([...cart,item]);
                    alert (`${item.name} agregado al carrito`);
                }
    };
const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert("Producto eliminado");
};

// vaciar carrito
const clearCart=()=>{setCart([])}

// mostrar total de items en el carrito
const getTotalItems=()=>{
    const totalItems = cart.reduce((acc,p) => acc + p.quantity,0);
    return totalItems;
};

const total = () => {
    const total = cart.reduce ((acc, p) => acc + p.price * p.quantity, 0);
    return Math.round(total * 100) / 100;
};

const checkout = () => {
    const ok = confirm ("¿Seguro que quiere finalizar la compra?");
    if (ok) {
        alert("¡Compra realizada con éxito!");
        clearCart();
    }
};
const values={cart,addItem,clearCart,getTotalItems, deleteItem, total, checkout};
  
  return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}   