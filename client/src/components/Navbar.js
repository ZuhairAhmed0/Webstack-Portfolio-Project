import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaBehance,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaBars,
  FaTimesCircle,
} from "react-icons/fa";

function Navbar() {
  let [openNavbar, setOpenNavbar] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/#" className="logo">
          Flavour
        </Link>

        {openNavbar ? (
          <FaTimesCircle
            className="openNavbar"
            onClick={() => setOpenNavbar((open) => !open)}
          />
        ) : (
          <FaBars
            className="openNavbar"
            onClick={() => setOpenNavbar((open) => !open)}
          />
        )}

        <div className="nav" style={{ height: `${openNavbar ? "91vh" : "0"}` }}>
          <ul className="nav-link">
            <li>
              <Link to="/#">Home</Link>
            </li>
            <li>
              <Link to="/#about">About Us</Link>
            </li>
            <li>
              <Link to="/#offers">Offers</Link>
            </li>
            <li>
              <Link to="/#menu">Menu</Link>
            </li>
            <li>
              <Link to="/#reservation">Reservation</Link>
            </li>
          </ul>
          <ul className="nav-icon">
            <li className="facebook-icon">
              <FaFacebook />
            </li>
            <li className="twitter-icon">
              <FaTwitter />
            </li>
            <li className="linkedin-icon">
              <FaLinkedinIn />
            </li>
            <li className="behance-icon">
              <FaBehance />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
