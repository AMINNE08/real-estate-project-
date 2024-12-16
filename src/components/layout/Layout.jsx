import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children, hideLayout }) => {
  return (
    <div>
      {!hideLayout && <Navbar /> }
      <main>{children}</main>
      {!hideLayout && <Footer/> }
    </div>
  );
};

export default Layout;
