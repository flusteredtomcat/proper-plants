import { PLANTS } from "./data";
import { useState } from "react";
import PlantsList from "./PlantsList/PlantsList";
import Cart from "./Cart/Cart";

export default function App() {
  const [plantsList, setPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemExists = cart.find((item) => {
      return item.id === plant.id;
    });
    if (itemExists) {
      const mappedCart = cart.map((cartItem) => {
        return cartItem.id === plant.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
      setCart(mappedCart);
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const reduceItemQuantity = (plant) => {
    const mappedCart = cart.map((item) => {
      return item.id === plant.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
    setCart(mappedCart);
  };

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        {/* Add plant list component here */}
        <PlantsList plantsList={plantsList} addToCart={addToCart} />
        {/* Add cart component here */}
        <Cart
          cart={cart}
          addToCart={addToCart}
          reduceItemQuantity={reduceItemQuantity}
        />
      </main>
    </>
  );
}
