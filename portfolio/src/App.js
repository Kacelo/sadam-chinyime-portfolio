import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./App.css";
import { ImageData } from "./assets/data";
import Landing from "./components/landing";
import MDBNNav from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <MDBNNav />
      <Landing />
    </div>
  );
}

export default App;
