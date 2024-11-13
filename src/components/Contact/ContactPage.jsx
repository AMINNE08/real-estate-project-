import "./ContactPage.css"; // Import the CSS file
import contactImage from "../Contact/contactimage.webp"; // Replace with your image path

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
              <option>Select project type</option>
              <option>Buying Property</option>
              <option>Selling Property</option>
              <option>Consulting</option>
            </select>

            <label>Budget</label>
            <select>
              <option>Select project budget</option>
              <option>$50,000 - $100,000</option>
              <option>$100,000 - $500,000</option>
              <option>$500,000+</option>
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
