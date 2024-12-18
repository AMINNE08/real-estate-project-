import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./ContactComp.css";
import contactImage from "../../assets/images/contactimage.webp";

const ContactComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Buying Property",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    if (formData.name && formData.email && formData.message) {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "Buying Property",
        message: "",
      });
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  return (
    <>
      <div className="contact-top">
        <h2>Lets Talk</h2>
        <p>
          Have a real estate project or idea? Were here to help you make it
          happen.
        </p>
      </div>
      <div className="contact-page">
        <div className="contact-left">
          <img src={contactImage} alt="Real Estate" className="contact-image" />
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <label>What service are you interested in?</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option>Buying Property</option>
              <option>Selling Property</option>
              <option>Consulting</option>
            </select>

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your project"
              rows="4"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactComp;
