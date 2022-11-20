import { createContext, useState } from "react"

const cartContext = createContext();

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const carrito = cart

    function inCart(item) {
        return cart.some((el) => el === item)
    }

    function addItem(item) {
        if (inCart(item) == false) {
            carrito.push(item)
            setCart(carrito)
        } else {
            return false 
        }
        console.log(cart)
    }

    const removeItem = (item) => {
        const newProducts = cart.filter((p) => p !== item);
        setCart(newProducts);
    }

    function deleteItems() {
        setCart([])
    }

    return <cartContext.Provider value={{ cart, addItem }}>
        {children}
    </cartContext.Provider>
}

export {ContextProvider}
export default cartContext;