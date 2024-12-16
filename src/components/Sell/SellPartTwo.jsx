import "../Sell/SellPartTwo.css";
import sellStory from "../../assets/images/sellStory.png"

const SellPartTwo = () => {
  return (
    <div className="y-container">
        <div className="right-s">
        <div className="y-header">
        <h1>Sell with a YAQIN partner agent or get a cash offer</h1>
        <p>
          YAQIN helps you sell your home, your way. Easily explore your selling
          options below and get personalized market value estimates — we can
          even help you choose the best option when you’re ready. This
          experience is currently available in select markets across the US.{" "}
          <a href="#">Click here</a> to see if its available in your city.
        </p>
      </div>
      <div className="y-search">
        <h2>Compare personalized options, no commitment required</h2>
        <div className="y-search-bar">
          <input type="text" placeholder="Enter your address" />
          <button>
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </div>
      </div>
      <div className="y-options">
        <div className="option">
          <h3>You can sell directly to Opendoor hassle-free</h3>
          <p>
            Get an all-cash offer from our trusted partner, Opendoor, to sell
            your home on your timeline.
          </p>
        </div>
        <div className="option">
          <h3>You can sell for more money with a YAQIN partner agent</h3>
          <p>
            Select YAQIN partner agents offer Showcase listings, which sell for
            2% more – that’s more money in your pocket.
          </p>
        </div>
      </div>
        </div>
        <div className="left-s">
        <div className="y-image">
        <img src={sellStory} alt="Y Illustration" />
      </div>
        </div>
      
      
    </div>
  );
};

export default SellPartTwo;
