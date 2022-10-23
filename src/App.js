import Navbar from "./navbar.js";
import "./home.css";
import Carrousel  from "./home_header.js";
import mainHome from "./home_main.js"

function App() {

  return (
    <div className="home">
      <div className="home_header">
        <Carrousel/>
      </div>
      <Navbar sticky="top"/>
      {mainHome()}
    </div>
  );
}

export default App;