import service1 from "../assets/img/service-1.jpg";
import service2 from "../assets/img/service-2.jpg";
import service3 from "../assets/img/service-3.jpg";
import service4 from "../assets/img/service-4.jpg";
import service5 from "../assets/img/service-5.jpg";
import service6 from "../assets/img/service-6.jpg";

import icon5 from "../assets/img/icons/icon-5.png";
import icon6 from "../assets/img/icons/icon-6.png";
import icon7 from "../assets/img/icons/icon-7.png";
import icon8 from "../assets/img/icons/icon-8.png";
import icon9 from "../assets/img/icons/icon-9.png";
import icon10 from "../assets/img/icons/icon-10.png";

function Services() {
  const services = [
    {
      title: "Architecture",
      image: service1,
      icon: icon5,
      text: "Smart architectural planning for modern residential and commercial spaces.",
    },
    {
      title: "3D Animation",
      image: service2,
      icon: icon6,
      text: "Realistic visual presentations to help clients understand the design clearly.",
    },
    {
      title: "House Planning",
      image: service3,
      icon: icon7,
      text: "Functional floor plans designed for comfort, space efficiency, and daily living.",
    },
    {
      title: "Interior Design",
      image: service4,
      icon: icon8,
      text: "Clean and practical interior solutions that balance style and function.",
    },
    {
      title: "Renovation",
      image: service5,
      icon: icon9,
      text: "Modern renovation solutions that improve existing spaces with quality finishes.",
    },
    {
      title: "Construction",
      image: service6,
      icon: icon10,
      text: "Reliable construction services focused on durability, safety, and quality.",
    },
  ];

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "650px" }}>
          <p className="section-label">Our Services</p>
          <h2 className="section-heading">
            We Focused On Modern Construction And Interior Design
          </h2>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.title}>
              <div className="ark-service-card">
                <img className="ark-service-bg" src={service.image} alt={service.title} />

                <div className="ark-service-content">
                  <img className="ark-service-icon" src={service.icon} alt="Service icon" />

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a href="#contact" className="ark-service-btn">
                    <span>+</span>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;