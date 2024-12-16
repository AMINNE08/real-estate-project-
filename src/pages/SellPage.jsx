import Faq from "../components/FAQ/FAQ";
import SellPartThree from "../components/Sell/SellPartThree";
import SellPartTwo from "../components/Sell/SellPartTwo";
import Whero from "../components/Sell/Whero";
export default function SellPage() {
  return (
    <>
      <div>
        <Whero />
        <SellPartTwo />
        <SellPartThree />
        <Faq/>
      </div>
    </>
  );
}
