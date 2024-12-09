import Navbar from "../components/navbar/Navbar";
import Whero from "../components/welcom hero/Whero";
import Wproperty from "../components/welcom property/Wproperty";

export default function WelcomePage() {
  return (
    <div>
      <Navbar showLogin={false} />
      <Whero/>
      <Wproperty/>
    </div>
  );
}
