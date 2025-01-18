import { useState } from "react";
import type { MenuItem, OrderItem } from "../types/index.ts";

export default function useOrder(){

    const[order , setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);
    

    const addItem = (item : MenuItem)=>{

        const itemExist = order.find( orderItem => orderItem.id === item.id);//retorna el item si existe

        if(itemExist){
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem);//si el id del item es igual al id del item que ya existe, se actualiza la cantidad sino se deja igual
            setOrder(updateOrder);// no hace falta hacer un spread operator porque ya se esta creando un nuevo array
        }else{ 
            const newItem : OrderItem = {...item, quantity: 1};
            setOrder([...order, newItem]);
        }
    }

    const removeItem  = (id : MenuItem['id'])=>{
        const updateOrder = order.filter(item => item.id !== id);
        setOrder(updateOrder);
    }

    const placeOrder = ()=>{
        setOrder([]);
        setTip(0);
    }

    return {
        addItem,
        order,
        tip,
        setTip,
        removeItem,
        placeOrder
    }
}