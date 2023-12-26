function WorkingHours() {
  return (
    <div className="work">
      <span>Qui quaeque mediocritatem et </span>
      <h3> Working hours </h3>
      <img src="image/spacer.png" alt="" />
      <h4>Monday - Friday</h4>
      <p>
        <time>8:00 am - 2:00 pm</time>(breakfast, lunch)
      </p>
      <p>
        <time>4:00 pm - 11:00 pm</time>(dinner)
      </p>
      <br />
      <h4>Saturday, Sunday</h4>
      <p>
        <time>9:00 am - 3:00 pm</time>(breakfast, lunch)
      </p>
      <p>
        <time>5:00 pm - 12:00 pm</time>(dinner)
      </p>
      <a className="phone" href="tel:0(123) 456-78-91">
        <samp>0(123) 456-78-91</samp>
      </a>
    </div>
  );
}

export default WorkingHours;
