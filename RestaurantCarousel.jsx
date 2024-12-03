import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import '../App.css'
const RestaurantCarousel = ({images}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleCarousel = (direction) => {
    if (direction === "right") {
      setImageIndex((imageIndex + 1) % images.length);
    } else if (direction === "left") {
      setImageIndex((imageIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    console.log(imageIndex);
  }, [imageIndex]);

 

  return (
    <div className="carousel">
      <div className="arrows">
        <MdOutlineKeyboardArrowLeft
          className="arrow"
          onClick={() => handleCarousel("left")}
        />
        <MdOutlineKeyboardArrowRight
          className="arrow"
          onClick={() => handleCarousel("right")}
        />
      </div>
      <img
        src={images[imageIndex]}
        className="prod-img"
        alt={`Restaurant ${imageIndex}`}
      />
      <div className="dots">
        {images.map((_, index) => (
          <div
            className={`dot ${imageIndex == index && 'active-dot'}`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCarousel;
