import { createContext, useContext, useState } from "react";

export const popup = createContext();

export const usePopup = () => {
  return useContext(popup);
};

export const PopupProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState([]);

  return (
    <popup.Provider value={{ visible, setVisible, images, setImages }}>
      {children}
    </popup.Provider>
  );
};