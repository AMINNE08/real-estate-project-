import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

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
