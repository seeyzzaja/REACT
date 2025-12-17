import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function CardTheme() {
    const {theme} = useContext(ThemeContext)
      const cardStyle = {
    padding: "16px",
    marginTop: "16px",
    borderRadius: "8px",
    width: "300px",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    boxShadow:
      theme === "light"
        ? "0 2px 6px rgba(0,0,0,0.1)"
        : "0 2px 6px rgba(0,0,0,0.5)"
  };
  return(
     <div style={cardStyle}>
      <h3>Card Title</h3>
      <p>Ini adalah contoh card yang mengikuti theme ({theme})</p>
    </div>
  )
}

export default CardTheme