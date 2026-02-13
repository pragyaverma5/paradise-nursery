import Navbar from "./Navbar";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <Navbar />

      <div className="about-container">
        <h1>About Paradise Nursery</h1>

        <p>
          Paradise Nursery is a premium plant store dedicated to bringing
          greenery into your home and workplace. We specialize in air
          purifying plants, succulents, and fresh herbs.
        </p>

        <p>
          Our mission is to create peaceful, green environments that improve
          mental well-being and air quality.
        </p>

        <p>
          Every plant is carefully nurtured and delivered with love. We
          believe that a touch of green can transform any space.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
