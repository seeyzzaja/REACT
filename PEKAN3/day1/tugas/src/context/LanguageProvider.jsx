import { useState } from "react";
import LanguageContext from "./LanguageContext";

const translations = {
  id: {
    language: "Bahasa",
    notification: "Notifikasi",
    changeLang: "Ganti Bahasa",
    addNotif: "Tambah Notifikasi",
    clearNotif: "Bersihkan Notifikasi"
  },
  en: {
    language: "Language",
    notification: "Notifications",
    changeLang: "Change Language",
    addNotif: "Add Notification",
    clearNotif: "Clear Notifications"
  }
};

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t: translations[language] // ⬅️ ini kuncinya
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
