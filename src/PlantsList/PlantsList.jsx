import Plant from "./Plant";

const PlantsList = ({ plantsList, addToCart }) => {
  return (
    <div>
      <h2>Plants</h2>
      <ul>
        {plantsList.map((plant) => {
          return (
            <div key={plant.id}>
              <Plant plant={plant} addToCart={addToCart} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default PlantsList;
