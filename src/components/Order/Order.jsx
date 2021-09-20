import emptyOrder from "../../images/empty-order.png";
import OrderItem from "../OrderItem/OrderItem";
import "./Order.css";

const Order = ({ items, removeFromOrder }) => {
  const totalPrice = items.reduce((total, current) => total + current.price, 0);
  return (
    <div className="order">
      <h1>Your order</h1>
      <p>For order bigger than 1000 din you get free delivery!</p>

      {items && items.length ? (
        <div className="order-items">
          {items.map((item) => (
            <OrderItem item={item} removeFromOrder={removeFromOrder} />
          ))}
        </div>
      ) : null}

      {!items || !items.length ? (
        <img src={emptyOrder} alt="No content" />
      ) : null}

      {items && items.length ? (
        <div className="total">
          <p>TOTAL:</p>
          <p>{totalPrice} din</p>
        </div>
      ) : null}
    </div>
  );
};

export default Order;
