import "./App.css";
import Data from "./components/Data";
import UserFetcher from "./components/UserFetcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserDetail from "./Pages/UserDetail";

function App() {
  return (
    <>
      <Data />
      <br />

      <UserFetcher />
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
