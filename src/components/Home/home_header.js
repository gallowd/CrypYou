import Carousel from 'react-bootstrap/Carousel';
import Img1 from "../../images/carousel1.jpg"
import Img2 from "../../images/carousel2.jpg"
import Img3 from "../../images/carousel3.jpg"

const Carrousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={5000}>
                <img
                    className="carousel_img"
                    src={Img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="carousel_text"><strong>CRYPTOCURRENCY TRACKING</strong></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="carousel_img"
                    src={Img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1 className="carousel_text"><strong>CONTINUOUS DATA UPDATE</strong></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="carousel_img"
                    src={Img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 className="carousel_text"><strong>SAVING OF YOUR FAVORITE CRYPTOCURRENCIES</strong></h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;