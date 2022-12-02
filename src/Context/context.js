import { createContext, useState } from "react"

const cartContext = createContext();

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const carrito = cart

    function inCart(itemID) {
        return cart.some((el) => `${el.id}` == itemID)
    }

    function addItem(item, itemID) {
        if (inCart(itemID) == false) {
            carrito.push(item)
            setCart(carrito)
        } else {
            return false 
        }
        console.log(carrito)
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