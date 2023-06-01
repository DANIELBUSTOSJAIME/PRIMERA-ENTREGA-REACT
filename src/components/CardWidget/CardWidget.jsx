import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CardWidget.css"

const CardWidget = () => {
  return (
    <div className="Widget">
        <ShoppingCartIcon />
        <p id="NumberWidget">3</p>
    </div>
  )
}

export default CardWidget