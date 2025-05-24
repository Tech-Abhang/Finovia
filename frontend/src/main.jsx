import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './index.css';
import { HomePage } from './landing page/home/HomePage';
import SignUp from './landing page/signup/SignUp';
import AboutPage from './landing page/about/AboutPage';
import Product from './landing page/product/ProductPage';
import Support from './landing page/support/SupportPage';
import Navbar from './landing page/Navbar';
import Footer from './landing page/Footer';
import NotFound from './landing page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);