import carousel1 from "../assets/img/carousel-1.jpg";

function Hero() {
  return (
    <header
      id="home"
      className="hero-section d-flex align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.55)), url(${carousel1})`,
      }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-kicker">Quality. Safety. Durability.</p>

          <h1 className="hero-title text-white">
            Bringing Your <span>Vision</span> to Life
          </h1>

          <p className="hero-text">
            We create modern and functional spaces with innovative design,
            quality materials, and reliable construction services.
          </p>

          <a href="#contact" className="btn btn-red btn-lg">
            Get Started <i className="fa fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;