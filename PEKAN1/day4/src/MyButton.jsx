// MyButton.jsx
import React from 'react';
import './component/Button.module.css'; // Import sebagai CSS Module

function MyButton({ type, children, onClick }) {
  const ButtonClass =`${styles.button} ${type === 'primary' ? styles.primary :'' }`
    return(
        <button className={ButtonClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default MyButton;