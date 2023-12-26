import { useEffect, useState } from "react";
import Loader from "./Loader";
import MenuItem from "./MenuItem";
import useAxiosFetch from "../hooks/useAxiosFetch";
const API_URL = "http://localhost:3500";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("all");
  const { data, isLoading, fetchError } = useAxiosFetch(
    `${API_URL}/api/v1/foods`
  );

  useEffect(() => {
    const fetchData = async () => {
      const filteredData = data.filter((food) =>
        category === "all" ? food : food.category === category
      );

      setFoods(filteredData);
    };

    fetchData();
  }, [category, data]);

  if (isLoading) return <Loader />;
  if (fetchError) return <p>{fetchError}</p>;

  return (
    <section className="menu" id="menu">
      <div className="container">
        <span>Qui quaeque mediocritatem et </span>
        <h3> Check our various menu </h3>
        <img src="image/spacer.png" alt="" />
        <ul className="menu">
          <li
            className={`${category === "all" ? "active" : ""}`}
            onClick={() => setCategory("all")}
          >
            All
          </li>
          <li
            className={`${category === "lunch" ? "active" : ""}`}
            onClick={() => setCategory("lunch")}
          >
            Lunch
          </li>
          <li
            className={`${category === "dinner" ? "active" : ""}`}
            onClick={() => setCategory("dinner")}
          >
            Dinner
          </li>
          <li
            className={`${category === "dessert" ? "active" : ""}`}
            onClick={() => setCategory("dessert")}
          >
            Dessert
          </li>
          <li
            className={`${category === "drinks" ? "active" : ""}`}
            onClick={() => setCategory("drinks")}
          >
            Drinks
          </li>
        </ul>
        <div className="menu-body">
          {foods.length > 0 &&
            foods.map((food) => (
              <MenuItem key={food._id} food={food} API_URL={API_URL} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
