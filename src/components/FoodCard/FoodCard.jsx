import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./FoodCard.css";

const FoodCard = ({ food, addToOrder }) => {
  const { name, description, image, price } = food;

  return (
    <div className="food-card">
      <div className="info">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <p className="price">{`${price} din`}</p>
        <button onClick={() => addToOrder(food)}>
          Add to your order <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <img src={image} alt="No content" />
    </div>
  );
};

export default FoodCard;
