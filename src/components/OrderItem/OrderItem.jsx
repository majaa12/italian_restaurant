import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./OrderItem.css";

const OrderItem = ({ item, removeFromOrder }) => {
  const { id, name, price } = item;
  return (
    <div className="order-item">
      <p>1x</p>
      <p className="name">{name}</p>
      <p>{price} din</p>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => {
          removeFromOrder(id);
        }}
      />
    </div>
  );
};

export default OrderItem;
