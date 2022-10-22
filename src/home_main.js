import Card1 from "./images/main1.jpg"
import Card2 from "./images/main2.jpg"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function main_home() {

    function GroupExample() {
        return (
            <CardGroup>
            <Card id="cardBg1">
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="cardBg2">
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="cardBg3">
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
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
        <div className="mainHome_backgrounds" id="cardBg">
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

const cardbg = document.getElementById("cardBg");
const cardbg1 = document.getElementById("cardBg1");
const cardbg2 = document.getElementById("cardBg2");
const cardbg3 = document.getElementById("cardBg3");

cardbg1.addEventListener("mouseover", function() {
    cardbg.classList.remove("card_backg2");
    cardbg.classList.remove("card_backg3");
    cardbg.classList.add("card_backg1");
});
cardbg2.addEventListener("mouseover", function() {
    cardbg.classList.remove("card_backg1");
    cardbg.classList.remove("card_backg3");
    cardbg.classList.add("card_backg2");
});
cardbg3.addEventListener("mouseover", function() {
    cardbg.classList.remove("card_backg1");
    cardbg.classList.remove("card_backg2");
    cardbg.classList.add("card_backg3");
});

export default main_home;