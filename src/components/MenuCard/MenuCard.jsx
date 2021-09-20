import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import FoodCard from "../FoodCard/FoodCard";
import "./MenuCard.css";

const MenuCard = ({ name, items, addToOrder }) => {
  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    console.log("aaaa");
    setShowItems(!showItems);
  };

  return (
    <div className="menu-card">
      <div className="name" onClick={toggleItems}>
        <p>{name}</p>
        {!showItems ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </div>
      <div className="items">
        {showItems &&
          items.map((item) => (
            <FoodCard food={item} key={item.name} addToOrder={addToOrder} />
          ))}
      </div>
    </div>
  );
};

export default MenuCard;
