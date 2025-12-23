import "./App.css";
import CurrentLocationInfo from "./Components/CurrentLocationInfo";
import DashboardButton from "./Components/Dashboard";
import LoginForm from "./Components/LoginForm";
import PrivateRoute from "./Components/PrivatRoute";
import { Routes, Route } from "react-router-dom";
import Dashboards from "./Components/Dashboards";
import Settings from "./Components/Settings";
import ProductSearch from "./Components/ProdukSearch";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<DashboardButton />} />
      <Route path="/location" element={<CurrentLocationInfo />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/search" element={<ProductSearch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   </>
  );
}

export default App;
