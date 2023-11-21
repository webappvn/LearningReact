import Footer from "./footer/Footers";
import Header from "./header/Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
