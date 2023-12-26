import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header id="home">
      <div className="container">
        <div className="header-body">
          <h2>
            <samp>Welcome to </samp> Flavour
          </h2>
          <img src="image/spacer-big.png" alt="" />
          <h4>Working Hours</h4>
          <data>
            Mon-Fri: <time>08:00 AM - 11:00 PM</time>
          </data>
          <data>
            Weekends: <time>09:00 AM - 12:00 PM</time>
          </data>
          <HashLink to="/#reservation"> Make a Reservation</HashLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
