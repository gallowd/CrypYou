import Navbar from "../../../components/UI/Navbar/navbar";
import Footer from "../../../components/UI/Footer/footer";
import "../../UI/Navbar/navbar.css"
import "../../UI/Footer/footer.css"
import { useParams } from "react-router-dom";

const CoinDetail = () => {
    const {coinName} = useParams();
    return (
        <div>
            <Navbar/>
            <div className="coin_detail">{coinName}</div>
            <Footer/>
        </div>
    );
}

export default CoinDetail;