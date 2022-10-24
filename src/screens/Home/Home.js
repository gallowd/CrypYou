import Navbar from "../../components/UI/Navbar/navbar";
import "../../components/Home/home.css";
import Carrousel  from "../../components/Home/home_header";
import mainHome from "../../components/Home/home_main"
import Footer from "../../components/UI/Footer/footer";

function Home() {
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

export default Home;