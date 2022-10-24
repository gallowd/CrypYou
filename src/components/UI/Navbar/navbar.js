import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUserSecret } from 'react-icons/fa';
import { FaBitcoin } from 'react-icons/fa';
import { MdContactSupport } from 'react-icons/md';
import { IoPhonePortrait } from 'react-icons/io5';
import { HiHomeModern } from 'react-icons/hi2';

const navbar = () => {
return (
    <>
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" sticky="top">
        <Container fluid>
            <Navbar.Brand href="../public/index.html"><span className="brand">CrypYou</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="border border-0"/>
            <Navbar.Offcanvas 
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                style={{ width: '15rem' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}><HiHomeModern className="nav_icon_central"/><span className="offcanvas_tittle">Home</span></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action2"><FaUserSecret className="nav_icon"/>Account</Nav.Link>
                <Nav.Link href="#action3"><FaBitcoin className="nav_icon"/>Crypto</Nav.Link>
                <Nav.Link href="#action4"><MdContactSupport className="nav_icon"/>About Us</Nav.Link>
                <Nav.Link href="#action5"><IoPhonePortrait className="nav_icon"/>Contact Us</Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
    ))}
    </>
);
}

export default navbar;