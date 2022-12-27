import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import SignIn from './SignIn';
import './style.css';

const Home = () => <div>Home</div>;
const Contact = () => <div>Contact Us </div>;
const Products = () => <div> Products</div>;
const NotFound = () => <div> Page Does Not Exist </div>;
export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/products">contact</Link>
        </div>
        <div>
          <Link to="/contact">products</Link>
        </div>
        <div>
          <Link to="/signin">sign in</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signin" element={<SignIn />} />
            {/* route with path * will be executed when the path specified in url does not exists */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
