import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './index.css';
import { HomePage } from './landing page/home/HomePage';
import SignUp from './landing page/signup/SignUp';
import AboutPage from './landing page/about/AboutPage';
import ProductPage from './landing page/product/ProductPage';
import Support from './landing page/support/SupportPage';
import Footer from './landing page/Footer';
import NotFound from './landing page/NotFound';
import Pricing from './landing page/pricing/PricingPage';
import Dashboard from './components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/orders" element={<Dashboard/>} />
        <Route path="/dashboard/holdings" element={<Dashboard/>} />
        <Route path="/dashboard/positions" element={<Dashboard/>} />
        <Route path="/dashboard/funds" element={<Dashboard/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);