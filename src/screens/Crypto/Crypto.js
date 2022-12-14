import Navbar from "../../components/UI/Navbar/navbar";
import Footer from "../../components/UI/Footer/footer";
import CryptoVideo from "../../videos/cryptoVideo.webm";
import "../../components/Crypto/crypto.css"
import Coins from "../../components/Crypto/coins"

function Crypto() {
    return (
        <div className="crypto">
            <div className="crypto_header">
                <div className="video_capa"></div>
                <video src={CryptoVideo} autoPlay loop muted/>
            </div>
            <Navbar sticky="top"/>
            <div className="crypto_main">
                {Coins()}
            </div>
            <div className="crypto_footer">
                <Footer/>
            </div>
        </div>
    );
}

export default Crypto;