import Navbar from "../../components/UI/Navbar/navbar";
import Footer from "../../components/UI/Footer/footer";
import Cart from "../../Context/context";
import { useContext, useState, useEffect } from "react";

function Acount() {

    const [wallet, setWallet] = useState([])
    const {cart} = useContext(Cart)

    useEffect(() => {
        setWallet(cart);
    }, [])

    return (
        <div>
            <Navbar/>
            <button onClick={() => console.log(wallet)}>ver</button>
                {wallet.map((c, i) => {
                    <div key={i}>
                        <p>{c.id}</p>
                    </div>
                })}
            <Footer/>
        </div>
    );
}

export default Acount;