function Contact() {
  return (
    <section id="contact" className="container-xxl py-5 bg-light">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">Contact Us</h4>
          <h1 className="display-5 mb-4">
            If You Have Any Query, Please Contact Us
          </h1>
        </div>

        <div className="row g-5">
          <div className="col-lg-4">
            <h3 className="mb-4">Get In Touch</h3>

            <p>
              <i className="fa fa-map-marker-alt text-primary me-3"></i>
              Laguna, Philippines
            </p>

            <p>
              <i className="fa fa-phone-alt text-primary me-3"></i>
              +63 912 345 6789
            </p>

            <p>
              <i className="fa fa-envelope text-primary me-3"></i>
              info@arkitektur.com
            </p>
          </div>

          <div className="col-lg-8">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    style={{ height: "55px" }}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    style={{ height: "55px" }}
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    style={{ height: "55px" }}
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;