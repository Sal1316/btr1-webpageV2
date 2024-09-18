import MetalGrate from "../../assets/metal-grate.jpg";
import MobileWeld from "../../assets/mobile-welding.jpg";
import Mig from "../../assets/mig-welding.jpg";
import Tig from "../../assets/tig.jpg";
import Stick from "../../assets/stick-welding.jpg";
import Excavator from "../../assets/excavator.jpg";
import "./Services.css";

const Services = () => {
  const ServicesOffered = [
    {
      name: "GMAW/MIG Welding",
      image: Mig,
      price: 15.99,
      description:
        "Our MIG welding services are tailored for a variety of industrial and commercial applications. We specialize in the precise welding of motor platforms, skids, pressure vessels, and pressure chambers, ensuring structural integrity and durability. Whether you require complex fabrications or lighter projects, our team delivers top-quality workmanship, perfect for both heavy-duty and light fabrication needs.",
    },
    {
      name: "GTAW/TIG Welding",
      image: Tig,
      price: 11.99,
      description:
        "Our TIG welding services are designed for precision and cleanliness, making them ideal for specialized projects. We offer expert welding of piping and tubing, with a focus on sanitary stainless steel. Additionally, we provide aluminum welding services, ensuring strong, clean welds for lightweight and corrosion-resistant applications.",
    },
    {
      name: "SMAW/Stick Welding",
      image: Stick,
      price: 11.99,
      description:
        "Our SMAW (Shielded Metal Arc Welding) services are perfect for situations where MIG or TIG welding isn't feasible. This versatile method excels in challenging environments, such as outdoor or less controlled conditions, offering durability and strength. Whether working with thicker materials or tackling repairs in hard-to-reach areas, our skilled team delivers reliable, high-quality welds.",
    },
    {
      name: "Mobile Welding Services",
      image: MobileWeld,
      price: 17.99,
      description:
        "With all the necessary equipment, we can tackle most jobs, big or small.",
    },
    {
      name: "Equipment Repair",
      image: Excavator,
      price: 1997.99,
      description:
        "From crack repair to complete refurbishing, we are equipped to handle it.",
    },
  ];

  return (
    <>
      <div
        className="menu p-4"
        style={{ backgroundImage: `url(${MetalGrate})` }}
      >
        <div className="service">
          <p className="servTitle p-5">
            Serving Riverside, San Bernadino, and San Diego Counties
          </p>
          <div className="servList pb-4">
            {ServicesOffered.map((service, index) => (
              <div key={index} className="card">
                <div className="cardImageContainer">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="cardImage"
                  />
                </div>
                <h2 className="cardTitle">{service.name}</h2>
                <p className="cardDescription p-3">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
