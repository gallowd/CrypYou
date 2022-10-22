import Navbar from "./navbar.js";
import "./home.css";
import Carrousel  from "./home_header.js";
import main_home from "./home_main.js";

function App() {
  return (
    <div className="home">
      <particleBackground/>
      <div className="home_header">
        <Carrousel/>
      </div>
      <Navbar sticky="top"/>
      {main_home()}
    </div>
  );
}

export default App;