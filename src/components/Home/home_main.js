import Card1 from "../../images/main1.jpg"
import Card2 from "../../images/main2.jpg"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function main_home() {


    const hoverbg1 = () => {
        document.getElementById("cardBg").classList.remove("card_backg2");
        document.getElementById("cardBg").classList.remove("card_backg3");
        document.getElementById("card_text2").innerHTML = ""
        document.getElementById("card_text3").innerHTML = ""
        document.getElementById("cardBg").classList.add("card_backg1");
        document.getElementById("card_text1").innerHTML = "Both you and your friends and family can be your own bank thanks to the new digital world that allows the connection between the world, without intermediaries!"
    }
    const hoverbg2 = () => {
        document.getElementById("cardBg").classList.remove("card_backg1");
        document.getElementById("cardBg").classList.remove("card_backg3");
        document.getElementById("card_text1").innerHTML = ""
        document.getElementById("card_text3").innerHTML = ""
        document.getElementById("cardBg").classList.add("card_backg2");
        document.getElementById("card_text2").innerHTML = "Due to the structure in which the network was designed, it is practically impossible for hackers or other attackers to disable the network"
    }
    const hoverbg3 = () => {
        document.getElementById("cardBg").classList.remove("card_backg1");
        document.getElementById("cardBg").classList.remove("card_backg2");
        document.getElementById("card_text1").innerHTML = ""
        document.getElementById("card_text2").innerHTML = ""
        document.getElementById("cardBg").classList.add("card_backg3");
        document.getElementById("card_text3").innerHTML = "No one can stop you from using your cryptocurrencies. Instead, centralized payment services may freeze your accounts or prevent you from making transactions"
    }


    function GroupExample() {
        return (
            <CardGroup>
            <Card id="cardBg1" onMouseOver={hoverbg1}>
                <Card.Body>
                <Card.Title>Connection</Card.Title>
                <Card.Text id="card_text1">
                    Both you and your friends and family can be your own bank thanks to the new digital world that allows the connection between the world, without intermediaries!
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="cardBg2" onMouseOver={hoverbg2}>
                <Card.Body>
                <Card.Title>Security</Card.Title>
                <Card.Text id="card_text2">
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="cardBg3" onMouseOver={hoverbg3}>
                <Card.Body>
                <Card.Title>No restrictions</Card.Title>
                <Card.Text id="card_text3">
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        );
    }

    return (
        <div className="main_home">
            <div className="mainHome_card1">
                <div className="mainHome_card1_text">
                    <h1 className="main_card_text">WHAT DOES CRYPYOU</h1>
                    <p>You can track cryptocurrency prices on CrypYou in more than 50 currencies. Popular cryptocurrency pairs include BTC to USD, ETH to USD, and SLP to PHP. You can also track metrics like 24-hour trading volume, market capitalization, price chart, historical performance chart, circulating supply, and more.</p>
                </div>
                <img src={Card1} className="mainHome_card1_img"/>
            </div>
            <div className="mainHome_backgrounds card_backg1" id="cardBg">
                {GroupExample()};
            </div>
            <div className="mainHome_card2">
                <img src={Card2} className="mainHome_card2_img"/>
                <div className="mainHome_card2_text">
                    <h1 className="main_card_text">CRYPTOCURRENCY PRICES</h1>
                    <p>The price that is calculated with CrypYou is based on a global volume weighted average price formula that is based on the pairings available on different exchanges for a particular crypto asset.</p>
                </div>
            </div>
        </div>
    );
}

export default main_home;