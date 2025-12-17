import "./App.css";
import CardTheme from "./component/CardTheme";
import Header from "./component/Header";
import ThemeParagraf from "./component/ParagrafTheme";
import Theme from "./component/Theme";
import UserProfile from "./component/UserProfile";
import LanguageProvider from "./context/LanguageProvider";
import NotificationProvider from "./context/Notificationprovider";
import ThemeProvider from "./context/ThemeProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <>
      <LanguageProvider>
        <NotificationProvider>
          <ThemeProvider>
            <UserProvider>
              <UserProfile />
              <hr />
              <br />
              <Theme />
              <ThemeParagraf />
              <CardTheme />
              <br />
              <hr />
              <Header />
            </UserProvider>
          </ThemeProvider>
        </NotificationProvider>
      </LanguageProvider>
    </>
  )
}

export default App;
