import Navbar from "../../components/UI/Navbar/navbar";
import Footer from "../../components/UI/Footer/footer";
import Cart from "../../Context/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../components/Account/wallet.css"
import { TiDelete } from "react-icons/ti"

function Acount() {

    const { cart, removeItem } = useContext(Cart)

    return (
        <div className="acount">
            <Navbar sticky="top"/>
            <div className="wallet">
                {cart.map((coin) => (
                    <Link to={`/acount/${coin.id}`} className="link">
                        <div key={coin.id} className="saved_coins">
                            <img alt={coin.name} src={coin.image} className="wallet_img"/>
                            <h2 className="wallet_symbol">{coin.symbol}</h2>
                            <h4 className="wallet_price">${coin.current_price}</h4>
                            {coin.price_change_percentage_24h > 0 ? <h4 className="wallet_change number_green">{coin.price_change_percentage_24h}%</h4> : <h4 className="wallet_change number_red">{coin.price_change_percentage_24h}%</h4>}
                            <h4 className="wallet_market_price">${coin.market_cap}</h4>
                            <Link to={`/acount`} className="link">
                                <TiDelete className="delete_icon" onClick={() => removeItem(coin.id)}/>
                            </Link>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="footer_wallet">
                <Footer/>
            </div>
        </div>
    );
}

export default Acount;