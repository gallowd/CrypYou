import CoinAPI from "../../API/cryptoAPI.js"
import "../../components/Crypto/crypto.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function Coins() {

    const [filter, setFilter] = useState("");

    return (
        <div>
            <div className="buscador">
                <h1>Find your favorite crypto</h1>
                <input id="filter" name="filter" type="text" value={filter}
                    onChange = {(event) => setFilter(event.target.value)}
                />
            </div>
            <div className="coins">
                {CoinAPI.filter(coin => coin.name.includes(filter)).map((coin, i) => (
                    <div key={i} className="coin_card">
                            <div className="coin_card_header">
                                <h5>{coin.market_cap_rank}</h5>
                                <Link to={`/crypto/${coin.name}`} className="link"><h2>{coin.name}</h2></Link>
                            </div>
                            <img alt={coin.name} src={coin.image} className="coin_img"/>
                            <div className="coin_card_footer">
                                <h2>{coin.symbol}</h2>
                                <h6>${coin.current_price}</h6>
                            </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Coins;
