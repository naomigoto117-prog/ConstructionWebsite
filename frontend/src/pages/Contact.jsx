import { useState } from "react";

function Contact() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="container-xxl py-5 bg-light">
      <div className="container">
        <div
          className="text-center mx-auto mb-5"
          style={{ maxWidth: "600px" }}
        >
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
            <form onSubmit={handleSubmit}>
              <div className="row g-3">

                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    style={{ height: "55px" }}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    style={{ height: "55px" }}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    className="btn btn-primary w-100 py-3"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>

                {status && (
                  <div className="col-12">
                    <p className="text-center mt-3">{status}</p>
                  </div>
                )}

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;