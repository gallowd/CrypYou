import "./navbar.css"
import main_video from "./videos/main_video.mp4"

function App() {
  return (
    <div className="main">
      <video src={main_video} autoPlay loop muted></video>
    </div>
  );
}

export default App;