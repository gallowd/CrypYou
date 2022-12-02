import Navbar from "../../../components/UI/Navbar/navbar";
import Footer from "../../../components/UI/Footer/footer";
import CoinAPI from "../../../API/cryptoAPI"
import LineChart from "./coin_grafic";
import Cart from "../../../Context/context";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./coin_detail.css"

function CoinDetail() {

    const {addItem} = useContext(Cart);

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
        <div className="coin_page">
            <Navbar/>
            <div>
                {coins.filter(coin => coin.id == `${coinId}`).map((coin, i) => (
                    <div key={i} className="coin_page_container">
                        <div className="containerLeft">
                            <img alt={coin.name} src={coin.image} className="coinDetail_img"/>
                            <div className="containerLeft_text">
                                <h1 className="coinText_title"><strong>{coin.name}</strong></h1>
                                <h3 className="coinText">Current Price: <strong>${coin.current_price}</strong></h3>
                                <h3 className="coinText">Market Price: <strong>${coin.market_cap}</strong></h3>
                            </div>
                            <button onClick={() => addItem(coin, coin.id)}>Add to wallet</button>
                        </div>
                        <div className="containerRight">
                            <LineChart
                                year = {coin.price_change_percentage_1y_in_currency}
                                months = {coin.price_change_percentage_200d_in_currency}
                                month = {coin.price_change_percentage_30d_in_currency}
                                twoWeek = {coin.price_change_percentage_14d_in_currency}
                                week = {coin.price_change_percentage_7d_in_currency}
                                day = {coin.price_change_percentage_24h_in_currency}
                                hour = {coin.price_change_percentage_1h_in_currency}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="footer_conin_detail">
                <Footer/>
            </div>
        </div>
    );
}

export default CoinDetail;