import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Asumsikan ada cara untuk memeriksa status otentikasi
const isAuthenticated = () => {
  // Logika otentikasi Anda (misalnya, memeriksa token di localStorage)
  return localStorage.getItem('authToken') === 'my_secret_token';
};

function PrivateRoute() {
  if (!isAuthenticated()) {
    // Jika tidak terautentikasi, arahkan ke halaman login
    return <Navigate to="/login" replace />;
  }
  // Jika terautentikasi, render komponen anak (nested routes)
  return <Outlet />;
}
export default PrivateRoute;

// Penggunaan di App.jsx
// <Routes>
//   <Route path="/login" element={<LoginForm />} />
//   <Route element={<PrivateRoute />}> {/* Ini adalah route guard */}
//     <Route path="/dashboard" element={<Dashboard />} />
//     <Route path="/settings" element={<Settings />} />
//   </Route>
// </Routes>