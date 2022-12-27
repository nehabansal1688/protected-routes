import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import './style.css';

const Home = () => <div>Home</div>;
const Contact = () => <div>Contact Us </div>;
const Products = () => <div> Products</div>;
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
