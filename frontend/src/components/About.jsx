import about1 from "../assets/img/about-1.jpg";
import about2 from "../assets/img/about-2.jpg";

function About() {
  return (
    <section id="about" className="container-xxl py-5 about-section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img className="img-fluid" src={about1} alt="Construction project" />
              <img className="img-fluid" src={about2} alt="Modern building" />
            </div>
          </div>

          <div className="col-lg-6">
            <h4 className="section-title">About Us</h4>

            <h1 className="display-5 mb-4">
              Building Strong Foundations And Lasting Impressions
            </h1>

            <p className="mb-3">
              We provide reliable construction services for residential,
              commercial, and renovation projects. Our work focuses on quality,
              safety, and durable results.
            </p>

            <p className="mb-4">
              From planning to final finishing, we help clients turn ideas into
              well-built spaces through careful project management and skilled
              craftsmanship.
            </p>

            <div className="d-flex align-items-center mb-5">
              <div
                className="experience-box d-flex flex-shrink-0 align-items-center justify-content-center"
              >
                <h1 className="display-1 mb-0">25</h1>
              </div>

              <div className="ps-4">
                <h3>Years</h3>
                <h3>Working</h3>
                <h3 className="mb-0 text-primary">Experience</h3>
              </div>
            </div>

            <a className="btn btn-primary py-3 px-5" href="#services">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;