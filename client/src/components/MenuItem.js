function MenuItem({ food, API_URL }) {
  return (
    <div className="menu-info">
      <div className="img">
        <img src={`${API_URL}/images/${food.image}`} alt={food.name} />
      </div>
      <div className="info">
        <h3>{food.name}</h3>
        <img src="image/space.png" alt="" />
        <p>{food.description}</p>
        <samp>${food.price}</samp>
      </div>
    </div>
  );
}

export default MenuItem;
