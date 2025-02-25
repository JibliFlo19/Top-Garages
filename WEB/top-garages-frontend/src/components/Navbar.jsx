import { Nav, NavLinks, NavLink, Logo } from "../components/Navbar.style";

function Navbar() {
  return (
    <Nav>
      <Logo>Top Garages</Logo>
      <NavLinks>
        <NavLink to="/">Acasă</NavLink>
        <NavLink to="/add">Adaugă Garaj</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
