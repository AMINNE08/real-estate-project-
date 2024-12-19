import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./ContactComp.css";
import contactImage from "../../assets/images/contactimage.webp";
import { useTranslation } from "react-i18next";

const ContactComp = () => {
  const { t } = useTranslation(); // Import the translation hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: t("Buying Property"),
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
      toast.success(t("Message sent successfully!"));
      setFormData({
        name: "",
        email: "",
        service: t("Buying Property"),
        message: "",
      });
    } else {
      toast.error(t("Please fill in all the fields!"));
    }
  };

  return (
    <>
      <div className="contact-top">
        <h2>{t("Let's Talk")}</h2>
        <p>{t("Have a real estate project or idea? We're here to help you make it happen.")}</p>
      </div>
      <div className="contact-page">
        <div className="contact-left">
          <img src={contactImage} alt={t("Real Estate")} className="contact-image" />
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>{t("Name")}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("Your Name")}
              required
            />

            <label>{t("Email")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("Your Email")}
              required
            />

            <label>{t("What service are you interested in?")}</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option>{t("Buying Property")}</option>
              <option>{t("Selling Property")}</option>
              <option>{t("Consulting")}</option>
            </select>

            <label>{t("Message")}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("Tell us more about your project")}
              rows="4"
              required
            ></textarea>

            <button type="submit">{t("Submit")}</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactComp;
