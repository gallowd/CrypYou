import Navbar from "../../components/UI/Navbar/navbar";
import Footer from "../../components/UI/Footer/footer";
import CryptoVideo from "../../videos/cryptoVideo.mp4";
import "../../components/Crypto/crypto.css"

function Crypto() {
    return (
        <div className="crypto">
            <div className="crypto_header">
                <div className="video_capa"></div>
                <video src={CryptoVideo} autoPlay loop muted/>
            </div>
            <Navbar sticky="top"/>
            <Footer/>
        </div>
    )
}

export default Crypto;