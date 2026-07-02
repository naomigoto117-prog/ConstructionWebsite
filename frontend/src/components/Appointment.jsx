import { useState } from "react";
import axios from "axios";

function Appointment() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
      await axios.post(`${API_URL}/api/contact`, formData);

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.data);
      }

      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container">
        <div className="row g-5">

          <div className="col-lg-5">
            <p className="section-label">Appointment</p>

            <h2 className="section-heading">
              Start Your Dream Project Today
            </h2>

            <p>
              Contact our team and let us discuss your project requirements.
            </p>

            <p>
              <i className="fa fa-phone-alt text-primary me-3"></i>
              +63 912 345 6789
            </p>

            <p>
              <i className="fa fa-envelope text-primary me-3"></i>
              info@arkitekt.com
            </p>
          </div>

          <div className="col-lg-7">
            <form className="row g-3" onSubmit={handleSubmit}>

              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <select
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose Service</option>
                  <option value="Construction">Construction</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Renovation">Renovation</option>
                </select>
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
                  <p className="mt-3 text-center">{status}</p>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Appointment;