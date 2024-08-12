import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Payment from './pages/payment';
import Product from './pages/product';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;
