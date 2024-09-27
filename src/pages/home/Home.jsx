import BannerImage from "../../assets/mig-welding2.jpg";
import "../home/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h2>Welding and Fabrication Services</h2>
      </div>
    </div>
  );
}

export default Home;
