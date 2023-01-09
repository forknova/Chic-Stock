import React, {createContext, useContext, useState} from 'react'
import toast from "react-hot-toast";

const Context = createContext()


export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [qty, setQty] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState(0);

    const onAdd = (product, quantity) =>{
        const checkProductInCart = cartItems.find(item => item._id === product._id)
            setTotalPrice(prevTotalPrice => prevTotalPrice +product.price * quantity )
            setTotalQuantities(prevTotalQuatities => prevTotalQuatities + quantity)

        if (checkProductInCart){
            const updatedCartItems = cartItems.map(cartProduct => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems)
        }else{
            product.quantity = quantity

            setCartItems([...cartItems , {...product}])
        }
            toast.success(`${qty} ${product.name} added to the cart`)
    }

    const incQty = () =>{
        setQty(prev => prev +1)
    }

    const decQty = () =>{
        setQty(prev => {
            if (prev -1 <1) return 1
             return prev - 1
        })
    }

    return (
        <Context.Provider
        value={{
            showCart,
            setShowCart,
            qty,
            cartItems,
            totalPrice,
            totalQuantities,
            incQty,
            decQty,
            onAdd
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)