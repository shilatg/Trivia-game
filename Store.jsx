import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Link } from 'react-router-dom';
import './Store.css'; // Make sure to create this file for styles

export const Store = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`store ${theme}`}>
      <h2>Our Restaurants</h2>
      <ul className="store-list">
        <li className="store-item">
          <Link className="store-link" to="/mcdonalds">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/2560px-McDonald%27s_logo.svg.png" alt="McDonald's" className="store-image" />
            McDonald's
          </Link>
        </li>
        <li className="store-item">
          <Link className="store-link" to="/pizzahut">
            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/1088px-Pizza_Hut_logo.svg.png" alt="Pizza Hut" className="store-image" />
            Pizza Hut
          </Link>
        </li>
        <li className="store-item">
          <Link className="store-link" to="/japanika">
            <img src="https://img.restaurantguru.com/r213-JAPANIKA-logo-2022-06.jpg" alt="Japanika" className="store-image" />
            Japanika
          </Link>
        </li>
        <li className="store-item">
          <Link className="store-link" to="/golda">
            <img src="https://iconz.co/wp-content/uploads/2020/11/GOLDA_logo-gold.png" alt="Golda" className="store-image" />
            Golda
          </Link>
        </li>
        <li className="store-item">
          <Link className="store-link" to="/vivino">
            <img src="https://media.easy.co.il/images/PICS/7478392.jpg" alt="Vivino" className="store-image" />
            Vivino
          </Link>
        </li>
        <li className="store-item">
          <Link className="store-link" to="/catenazapata">
            <img src="data:image/png;base64,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" alt="Catena Zapata" className="store-image" />
            Catena Zapata
          </Link>
        </li>
      </ul>
    </div>
  );
};
