import Navbar from "./navbar.js";
import "./home.css";
import Carrousel  from "./home_header.js";
import mainHome from "./home_main.js"
import Footer from "./footer.js";

function App() {

  return (
    <div className="home">
      <div className="home_header">
        <Carrousel/>
      </div>
      <Navbar sticky="top"/>
      {mainHome()}
      <Footer/>
    </div>
  );
}

export default App;