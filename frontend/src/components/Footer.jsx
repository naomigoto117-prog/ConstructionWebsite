function Footer() {
  return (
    <footer className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h3 className="text-light mb-4">Address</h3>
            <p><i className="fa fa-map-marker-alt text-primary me-3"></i>Laguna, Philippines</p>
            <p><i className="fa fa-phone-alt text-primary me-3"></i>+63 912 345 6789</p>
            <p><i className="fa fa-envelope text-primary me-3"></i>info@arkitektur.com</p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3 className="text-light mb-4">Services</h3>
            <a className="btn btn-link" href="#services">Architecture</a>
            <a className="btn btn-link" href="#services">House Planning</a>
            <a className="btn btn-link" href="#services">Interior Design</a>
            <a className="btn btn-link" href="#services">Construction</a>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3 className="text-light mb-4">Quick Links</h3>
            <a className="btn btn-link" href="#about">About Us</a>
            <a className="btn btn-link" href="#services">Our Services</a>
            <a className="btn btn-link" href="#projects">Projects</a>
            <a className="btn btn-link" href="#contact">Contact Us</a>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3 className="text-light mb-4">Newsletter</h3>
            <p>Get updates about our latest construction projects.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
              <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright">
        <div className="container py-3 text-center text-white-50">
          © {new Date().getFullYear()} Arkitektur Construction. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;