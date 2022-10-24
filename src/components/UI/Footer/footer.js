import "./footer.css"
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

const footer = () => {
    return (
        <div className="footer">
            <div className="footerB1">
                <div className="footerB1_logo">
                    <h1 className="footerB1_logo_title">CrypYou</h1>
                    <p className="footerB1_logo_text">Don't be left behind in the new digital world</p>
                </div>
                <div className="footerB1_media">
                    <p className="footerB2_logo_text">Find us on</p>
                    <BsInstagram className="footerB1_media_icon"/>
                    <BsTwitter className="footerB1_media_icon"/>
                    <FaFacebookF className="footerB1_media_icon"/>
                    <FaDiscord className="footerB1_media_icon"/>
                </div>
            </div>
            <div className="footerB2">
                <p className="footerB2_text">© 2022 | Derechos Reservados Braulio Zamora</p>
            </div>
        </div>
    );
    }
    
    export default footer;