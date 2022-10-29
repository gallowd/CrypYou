import Navbar from "../../../components/UI/Navbar/navbar";
import Footer from "../../../components/UI/Footer/footer";
import { useParams } from "react-router-dom";

function CoinDetail() {
    const {coinName} = useParams()
    console.log(coinName)
    return (
        <div>
            <Navbar/>
            <div className="coin_detail">{coinName}</div>
            <Footer/>
        </div>
    );
}

export default CoinDetail;