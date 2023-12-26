import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToUpButton from "./components/ScrollToUpButton";
import About from "./components/About";
import Offers from "./components/Offers";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import WorkingHours from "./components/WorkingHours";
import Booking from "./components/Booking";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <main>
          <About />
          <Offers />
          <Menu />
          <Reservation>
            <WorkingHours />
            <Booking />
          </Reservation>
        </main>
        <ScrollToUpButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
