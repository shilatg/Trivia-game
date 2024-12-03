import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { useNavigate } from "react-router-dom";
import '../App.css';
import './Home.css';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/LoginCard');
  };

  return (
    <div className={`home-container ${theme}`}>
      <h1>Welcome to the Home Page</h1>
      <p>Your journey starts here. Explore and enjoy!</p>
      <button onClick={goToLogin} className="login-button">Go to Login</button>
    </div>
  );
};

export default Home;
