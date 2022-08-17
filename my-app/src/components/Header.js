import { Navbar, NavbarBrand } from "reactstrap";
import cblogo from "../app/assets/img/cblogo.png";

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <div className="flex">
          <img src={cblogo} alt="nucamp logo" />
          <h1>
            BRUTALIST STUDENT REACT EXERCISES
          </h1>
          <img src={cblogo} alt="nucamp logo" />
        </div>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
