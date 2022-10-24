import Card1 from "./images/main1.jpg"
import Card2 from "./images/main2.jpg"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function main_home() {


    const hoverbg1 = () => {
        document.getElementById("cardBg").classList.remove("card_backg2");
        document.getElementById("cardBg").classList.remove("card_backg3");
        document.getElementById("card_text2").innerHTML = ""
        document.getElementById("card_text3").innerHTML = ""
        document.getElementById("cardBg").classList.add("card_backg1");
        document.getElementById("card_text1").innerHTML = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    }
    const hoverbg2 = () => {
        document.getElementById("cardBg").classList.remove("card_backg1");
        document.getElementById("cardBg").classList.remove("card_backg3");
        document.getElementById("card_text1").innerHTML = ""
        document.getElementById("card_text3").innerHTML = ""
        document.getElementById("cardBg").classList.add("card_backg2");
        document.getElementById("card_text2").innerHTML = "This card has supporting text below as a natural lead-in to additional content."
    }
    const hoverbg3 = () => {
        document.getElementById("cardBg").classList.remove("card_backg1");
        document.getElementById("cardBg").classList.remove("card_backg2");
        document.getElementById("card_text1").innerHTML = ""
        document.getElementById("card_text2").innerHTML = ""
        document.getElementById("cardBg").classList.add("card_backg3");
        document.getElementById("card_text3").innerHTML = "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
    }


    function GroupExample() {
        return (
            <CardGroup>
            <Card id="cardBg1" onMouseOver={hoverbg1}>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text id="card_text1">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="cardBg2" onMouseOver={hoverbg2}>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text id="card_text2">
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="cardBg3" onMouseOver={hoverbg3}>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
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
                    <h1>NIGHT CITY CHANGES EVERY BODY</h1>
                    <p>Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.</p>
                </div>
                <img src={Card1} className="mainHome_card1_img"/>
            </div>
            <div className="mainHome_backgrounds card_backg1" id="cardBg">
                {GroupExample()};
            </div>
            <div className="mainHome_card2">
                <img src={Card2} className="mainHome_card2_img"/>
                <div className="mainHome_card2_text">
                    <h1>NIGHT CITY CHANGES EVERY BODY</h1>
                    <p>Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.</p>
                </div>
            </div>
        </div>
    );
}

export default main_home;