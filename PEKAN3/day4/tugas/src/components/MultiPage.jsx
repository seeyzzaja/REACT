import React from "react";
import { Routes, Route, NavLink,Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/RoutParam";
import Dashboard from "../pages/Dashboard";
import DashboardProfile from "../pages/DashboardProfile";
import DashboardSettings from "../pages/DashboardSetting";



function MultiPage() {
  return (
    <>
      <h1>contoh route</h1>
      <nav>
       <ul>
          <li>
            <Link to="/">beranda(Link)</Link>
          </li>
       
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            about (NavLink)
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >conatct (NavLink dengan style)</NavLink>
        </li>
        <li ><Link to={'/product/1'}>produk 1</Link></li>
        <li> <Link to={'/product/ab'}>produk ab </Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        <li></li>
        </ul>
      </nav>

         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="DashboardProfile" element={<DashboardProfile/>}/>
            <Route path="Dashboardsetting" element ={<DashboardSettings/>}/>
            </Route>
      </Routes>
    </>
  );
}

export default MultiPage;
