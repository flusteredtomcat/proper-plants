const Plant = ({ plant, addToCart }) => {
  return (
    <li>
      <p>{plant.image}</p>
      <p>{plant.name}</p>
      <button
        onClick={() => {
          addToCart(plant);
        }}
      >
        Add to cart
      </button>
    </li>
  );
};

export default Plant;
