import { useReducer } from "react";
import axios from "axios";
const API_URL = "https://flavourfoods.onrender.com/api/v1/booking";
const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  numOfPeople: "",
  message: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "date":
      return { ...state, date: action.payload };
    case "time":
      return { ...state, time: action.payload };
    case "numOfPeople":
      return { ...state, numOfPeople: action.payload };
    case "reset":
      return { ...initialValue, message: action.payload };
    default:
      return state;
  }
}
function Booking() {
  const [
    { firstName, lastName, email, phone, date, time, numOfPeople, message },
    dispatch,
  ] = useReducer(reducer, initialValue);

  function handleChange(e) {
    dispatch({ type: e.target.name, payload: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(API_URL, {
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      numOfPeople,
    });
    dispatch({ type: "reset", payload: response.data.message });
  }
  return (
    <div className="book-table" id="reservation">
      <div className="text">
        <span>Book a table </span>
        <h3> Make a reservation</h3>
        <img src="image/spacer-white.png" alt="" />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          dir="auto"
          name="firstName"
          placeholder="Please enter your first name *"
          required
          value={firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          dir="auto"
          name="lastName"
          placeholder="Please enter your last name *"
          required
          value={lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Please enter your email  option"
          value={email}
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Phone *"
          name="phone"
          required
          value={phone}
          onChange={handleChange}
        />
        <div className="date">
          {!date && <label htmlFor="date">Date *</label>}
          <input
            type="date"
            name="date"
            required
            id="date"
            value={date}
            onChange={handleChange}
          />
        </div>
        <div className="time">
          {!time && <label htmlFor="time">Time *</label>}
          <input
            type="time"
            id="time"
            name="time"
            placeholder="Time *"
            required
            value={time}
            onChange={handleChange}
          />
        </div>
        <input
          type="number"
          name="numOfPeople"
          placeholder="No. of people *"
          required
          value={numOfPeople}
          onChange={handleChange}
        />

        <input type="submit" className="btn" value="Booking" />

        {message && (
          <p style={{ color: "red", textAlign: "center", fontSize: "1.2rem" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Booking;
