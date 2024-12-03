import React from 'react'
import { usePopup } from './PopupProvider'
import '../App.css'
import { IoMdClose } from "react-icons/io";

import RestaurantCarousel from './RestaurantCarousel'
const Popup = () => {
    const {images, visible, setVisible } = usePopup()
  return (
    <div className='popup'>
        <button onClick={() => setVisible(false)} className='close-btn'>
            <IoMdClose />
        </button>
        <RestaurantCarousel images={images}/>
        
    </div>
  )
}

export default Popup