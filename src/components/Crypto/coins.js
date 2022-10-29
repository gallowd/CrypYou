import CoinAPI from "../../API/cryptoAPI.js"
import "../../components/Crypto/crypto.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Coins() {

    const [filter, setFilter] = useState("");
    const [coins, setCoins] = useState([]);

    const getCoins = async () => {
        const coins = await CoinAPI();
        setCoins(coins)
    }

    useEffect(() => {
        getCoins();
    }, [])

    return (
        <div>
            <div className="buscador">
                <h1>Find your favorite crypto</h1>
                <div className="inputBox">
                    <input id="filter" name="filter" type="text" value={filter}
                        onChange = {(event) => setFilter(event.target.value)}
                    />
                </div>
            </div>
            <div className="coins">
                {coins.filter(coin => coin.name.includes(filter)).map((coin, i) => (
                    <Link to={`/crypto/${coin.name}`} className="link">
                        <div key={i} className="coin_card">
                            <div className="coin_card_header">
                                <h5>{coin.market_cap_rank}</h5>
                                <h2>{coin.name}</h2>
                            </div>
                            <img alt={coin.name} src={coin.image} className="coin_img"/>
                            <div className="coin_card_footer">
                                <h2>{coin.symbol}</h2>
                                <h6>${coin.current_price}</h6>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Coins;
