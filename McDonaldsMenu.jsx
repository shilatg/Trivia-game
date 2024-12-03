import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartStore } from './CartStore';
import { usePopup } from './PopupProvider';
import './Stores.css';  // הוספת קובץ ה-CSS הגלובלי

const McDonaldsMenu = () => {
  const navigate = useNavigate();
  const { setImages, setVisible } = usePopup();

  const menu = [
    { name: 'Big Mac', price: 25, images: [
      "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F16011.png%3Ft%3D1717595774&w=750&q=75"
    ]},
    { name: 'McChicken', price: 20 , images: [
     "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F14449.png%3Ft%3D1653853401&w=1920&q=75" ]},
    { name: 'Classic Mumbai', price: 28, images: [
      "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F11932.png%3Ft%3D1671543352&w=1920&q=75" ] },
    { name: 'Cheeseburger', price: 15, images: [
      "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F16402.png%3Ft%3D1700137233&w=1920&q=75" ] },
    { name: 'Filet-O-Fish', price: 22 , images: [
      "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F11872.png%3Ft%3D1712052931&w=1920&q=75" ]},
    { name: 'McNuggets (9 pcs)', price: 18, images: [
   "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F5352.png%3Ft%3D1674650705&w=1920&q=75" ]},
    { name: 'McFries', price: 12 , images: [
      "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F12046.png%3Ft%3D1717596581&w=1920&q=75" ]},
    { name: 'McFlurry', price: 14 , images: [
      "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F16966.png%3Ft%3D1722952262&w=1920&q=75" ]},
    { name: 'Double Cheeseburger', price: 20 , images: [
      "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F16403.png%3Ft%3D1700137163&w=1920&q=75" ]},
    { name: 'Spicy McChicken', price: 22, images: [
     "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F16614.png%3Ft%3D1717593466&w=1920&q=75" ] },
    
    { name: 'McSalad', price: 24 , images: [
      "https://order.mcdonalds.co.il/_next/image?url=https%3A%2F%2Fnewcdnmedia.mcdonalds.co.il%2F_media%2Fmedia%2F57%2F11891.png%3Ft%3D1712052811&w=1920&q=75" ]},
  ];

  const goToCart = () => {
    navigate('/cart');
  };

  const handleImage = (images) => {
    setVisible(true);
    setImages(images);
  };

  return (
    <div className="menu-container McDonalds-menu-container">
      <h2>McDonald's Menu</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} ₪
            <div className="resButtons">
              {item.images && <button onClick={() => handleImage(item.images)}>צפה במוצר</button>}
              <button onClick={() => cartStore.addItem(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="go-to-cart-button" onClick={goToCart}>Go to Cart</button>
    </div>
  );
};

export default McDonaldsMenu;
