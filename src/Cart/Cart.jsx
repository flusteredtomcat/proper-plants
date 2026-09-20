const Cart = ({ cart, addToCart, reduceItemQuantity }) => {
  return (
    <div>
      <h3>Cart</h3>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.image}</p>
              <p>{item.name}</p>
              <button
                onClick={() => {
                  reduceItemQuantity(item);
                }}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  addToCart(item);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
