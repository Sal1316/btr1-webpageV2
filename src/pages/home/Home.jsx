import BannerImage from "../../assets/mig-welding2.jpg";
import "../home/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Welding and Fabrication Services</h1>
      </div>
    </div>
  );
}

export default Home;
