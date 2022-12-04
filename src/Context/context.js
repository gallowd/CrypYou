import { createContext, useState } from "react"

const cartContext = createContext();

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const carrito = cart

    function inCart(itemID) {
        return cart.some((el) => el.id == itemID)
    }

    function addItem(item, itemID) {
        if (inCart(itemID) == false) {
            carrito.push(item)
            setCart(carrito)
            console.log(carrito)
        }
    }

    function removeItem(itemID) {
        const newProducts = carrito.filter((p) => p.id !== itemID);
        setCart(newProducts);
        console.log(newProducts)
    }

    return <cartContext.Provider value={{ cart, addItem, removeItem }}>
        {children}
    </cartContext.Provider>
}

export {ContextProvider}
export default cartContext;