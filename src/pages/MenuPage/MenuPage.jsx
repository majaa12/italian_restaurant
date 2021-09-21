import { useState, useEffect} from "react";

import MenuCard from "../../components/MenuCard/MenuCard";
import Order from "../../components/Order/Order";
import menu from "../../data/menu";
import "./MenuPage.css";

const LOCAL_STORAGE_KEY = "react-order-items";

const MenuPage = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [orderItemId, setOrderItemId] = useState(0);

  useEffect(()=>{
    const storageOrderItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageOrderItems){
      setOrderItems(storageOrderItems);
    }
  }, []);


  useEffect( () =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orderItems));
  }, [orderItems]);


  
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
