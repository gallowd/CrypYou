import Navbar from "../../../components/UI/Navbar/navbar";
import Footer from "../../../components/UI/Footer/footer";
import CoinAPI from "../../../API/cryptoAPI"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CoinDetail() {
    const {coinId} = useParams()

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
            <Navbar/>
            <div className="coins">
                {coins.filter(coin => coin.id == `${coinId}`).map((coin, i) => (
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
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default CoinDetail;