function Offers() {
  return (
    <section className="offers" id="offers">
      <div className="container">
        <span>Qui quaeque mediocritatem et </span>
        <h3> The offers of the day </h3>
        <img src="image/spacer-white.png" alt="" />
        <div className="offer">
          <figure>
            <img src="image/offer-1.jpg" alt="" />
            <figcaption>
              <strong>Citrus avocado salad</strong> <br />
              <small> Vel cu essent invidunt accusamus</small>
            </figcaption>
          </figure>
          <figure>
            <img src="image/offer-2.jpg" alt="" />
            <figcaption>
              <strong>Greek chicken kabobs</strong> <br />
              <small> Vel cu essent invidunt accusamus</small>
            </figcaption>
          </figure>
          <figure>
            <img src="image/offer-3.jpg" alt="" />
            <figcaption>
              <strong>Vegan meze layer cake</strong> <br />
              <small> Vel cu essent invidunt accusamus</small>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Offers;
