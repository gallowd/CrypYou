import Navbar from "../../components/UI/Navbar/navbar";
import Footer from "../../components/UI/Footer/footer";
import Cart from "../../Context/context";
import { useContext } from "react";
import "../../components/Account/wallet.css"

function Acount() {

    const {cart} = useContext(Cart)

    return (
        <div className="acount">
            <Navbar sticky="top"/>
            <div className="wallet">
                {cart.map((coin) => (
                    <div key={coin.id}>
                        <h1 className="title">{coin.name}</h1>
                    </div>
                ))}
            </div>
            <div className="footer_wallet">
                <Footer/>
            </div>
        </div>
    );
}

export default Acount;