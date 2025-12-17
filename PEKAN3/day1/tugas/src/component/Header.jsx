import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import NotificationContext from "../context/NotificatoinContext";


function Header() {
  const { t, toggleLanguage } = useContext(LanguageContext);
  const { notification, notif, clearNotif } = useContext(NotificationContext);
 
  return (
    <header>
      <p>
        {t.language}: {t.language === "Bahasa" ? "Indonesia" : "English"}
      </p>
      <p>
        {t.notification}: {notification}
      </p>
      
      <br />
      <button onClick={toggleLanguage}>{t.changeLang}</button>
      <button onClick={notif}>{t.addNotif}</button>
      <button onClick={clearNotif}>{t.clearNotif}</button>
    </header>
  );
}

export default Header;
