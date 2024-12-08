import "./ContactPage.css"; 
import contactImage from "../../assets/images/contactimage.webp"; 

const ContactPage = () => {
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
          <form>
            <label>Name</label>
            <input type="text" placeholder="Your Name" />

            <label>Email</label>
            <input type="email" placeholder="Your Email" />

            <label>What service are you interested in?</label>
            <select>
              <option>Buying Property</option>
              <option>Selling Property</option>
              <option>Consulting</option>
            </select>

            <label>Message</label>
            <textarea
              placeholder="Tell us more about your project"
              rows="4"
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
