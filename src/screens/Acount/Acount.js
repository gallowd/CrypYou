import Navbar from "../../components/UI/Navbar/navbar";
import Footer from "../../components/UI/Footer/footer";
import Cart from "../../Context/context";
import { useContext } from "react";
import "../../components/Account/wallet.css"
import { TiDelete } from "react-icons/ti"

function Acount() {

    const {cart} = useContext(Cart)

    return (
        <div className="acount">
            <Navbar sticky="top"/>
            <div className="wallet">
                {cart.map((coin) => (
                    <div key={coin.id} className="saved_coins">
                        <img alt={coin.name} src={coin.image} className="wallet_img"/>
                        <h2 className="wallet_symbol">{coin.symbol}</h2>
                        <h4 className="wallet_price">{coin.current_price}</h4>
                        <h4 className="wallet_change">{coin.price_change_percentage_24h}</h4>
                        <h4 className="wallet_market_price">{coin.market_cap}</h4>
                        <TiDelete className="delete_icon"/>
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