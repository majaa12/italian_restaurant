import { useHistory } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const history = useHistory();

  const onButtonClick = () => {
    history.push("/menu");
  };

  return (
    <div className="home-page">
      <div className="home-page-background">
        <div className="home-page-overlay"></div>
        <div className="home-page-content">
          <p>Discover and order the best italian food in your city!</p>
          <button onClick={onButtonClick}>MENU</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
