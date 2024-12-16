import "../Sell/SellPartThree.css";
import selltwo from "../../assets/images/selltwo.svg"; 

const SellPartThree = () => {
  return (
    <div className="sell-part-three">
      <div className="sell-header">
        <h1>Sell traditionally with an agent</h1>
        <p>
          Not in a market with YAQINs new selling experience? Work with a real
          estate agent for selling support at every step, including prepping,
          listing, and marketing your home.
        </p>
        <div className="sell-buttons">
          <button className="find-agent-button">Find an agent</button>
          <a href="#" className="learn-more-link">
            Learn how to choose an agent
          </a>
        </div>
      </div>
      <div className="sell-content">
        <div className="sell-column">
          <h2>Why sell traditionally</h2>
          <ul>
            <li>✅ Potential for bidding wars</li>
            <li>✅ Access to local market expertise</li>
            <li>✅ Get help negotiating and reviewing offers</li>
            <li>✅ Navigate a stressful process with a dedicated guide</li>
          </ul>
        </div>
        <div className="sell-image">
          <img src={selltwo} alt="Selling traditionally illustration" />
        </div>
        <div className="sell-column">
          <h2>How to sell traditionally</h2>
          <p>
            Learn more about the process of{" "}
            <a href="#">selling your house with a listing agent</a>. If this is
            the best route for you, interview agents and select a professional
            who will meet your expectations. Your agent will then guide you
            through the steps of{" "}
            <a href="#">selling your home</a>.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default SellPartThree;
