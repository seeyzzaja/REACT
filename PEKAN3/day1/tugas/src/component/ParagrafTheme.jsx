import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function ThemeParagraf() {
const {theme} = useContext(ThemeContext)
 const paragraphStyle = {
    color: theme === 'light' ? '#000' : '#fff',
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    padding: '10px',
    borderRadius: '5px'
  };
    return(

        <>
        <p style={paragraphStyle}>
            ini adalah contoh penggunaan theme pada paragraf ({theme})
        </p>
        </>
    )
}

export default ThemeParagraf