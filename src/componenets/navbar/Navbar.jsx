import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo_dark from "../../assets/Logo-croped.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import "./Navbar.css";

const StyledLink = styled(Link)`
  color: white;
  font-size: 24px;
  text-decoration: none;
  margin: 10px 0;
  padding: 5px 15px;
  transition: color 0.3s ease, transform 0.2s ease;
  border-radius: 5px;

  &.active {
    background-color: ${"#A9A9A9"};
    transform: scale(0.9); /* Simulate button press */
  }
`;

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // console.log("Drawer state:", drawerOpen);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleBurger = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={logo_dark} alt="Logo" className="logo pt-1 pb-1" />
        </Link>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleBurger}>
          {drawerOpen ? (
            <CloseIcon style={{ fontSize: "3rem" }} />
          ) : (
            <MenuIcon style={{ fontSize: "3rem" }} />
          )}
        </div>

        {/* Drawer Slide Menu */}
        <ul className={`nav-items ${drawerOpen ? "open" : ""}`}>
          <StyledLink
            to="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => {
              setActiveLink("/");
              closeDrawer();
            }}
          >
            Home
          </StyledLink>
          <StyledLink
            to="/services"
            className={activeLink === "/services" ? "active" : ""}
            onClick={() => {
              setActiveLink("/services");
              closeDrawer();
            }}
          >
            Services
          </StyledLink>
          <StyledLink
            to="/contact"
            className={activeLink === "/contact" ? "active" : ""}
            onClick={() => {
              setActiveLink("/contact");
              closeDrawer();
            }}
          >
            Contact
          </StyledLink>
        </ul>
      </div>

      {/* Backdrop to close the menu when clicking outside */}
      {drawerOpen && <div className="backdrop" onClick={closeDrawer}></div>}
    </>
  );
};

export default Navbar;
