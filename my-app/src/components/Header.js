import { Navbar, NavbarBrand } from "reactstrap";
import cblogo from '../app/assets/img/cblogo.png';

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={cblogo} alt="nucamp logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
