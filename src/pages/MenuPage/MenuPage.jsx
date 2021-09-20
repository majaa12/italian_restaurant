import { useState } from "react";

import MenuCard from "../../components/MenuCard/MenuCard";
import Order from "../../components/Order/Order";
import menu from "../../data/menu";
import "./MenuPage.css";

const MenuPage = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [orderItemId, setOrderItemId] = useState(0);

  const addToOrder = (item) => {
    const updatedItems = [...orderItems, { ...item, id: orderItemId }];
    setOrderItems(updatedItems);
    setOrderItemId(orderItemId + 1);
  };

  const removeFromOrder = (id) => {
    const updatedItems = orderItems.filter((item) => item.id !== id);
    setOrderItems(updatedItems);
  };

  return (
    <div className="menu-page">
      <div className="menu">
        {menu.map(({ name, items }) => (
          <MenuCard
            key={name}
            name={name}
            items={items}
            addToOrder={addToOrder}
          />
        ))}
      </div>
      <Order items={orderItems} removeFromOrder={removeFromOrder} />
    </div>
  );
};

export default MenuPage;
