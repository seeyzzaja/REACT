// MyButton.jsx
import React from 'react';
import styles from './Button.module.css'; // Import sebagai CSS Module

function MyButton({ type, children, onClick }) {
  // Menggabungkan kelas default dengan kelas berdasarkan type
  const buttonClass = `${styles.button} ${type === 'primary' ? styles.primary : ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;