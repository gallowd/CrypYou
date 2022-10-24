import Navbar from "./components/UI/Navbar/navbar.js";
import "./components/Home/home.css";
import Carrousel  from "./screens/Home/home_header.js";
import mainHome from "./screens/Home/home_main.js"
import Footer from "./components/UI/Footer/footer.js";

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