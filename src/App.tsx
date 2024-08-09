import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payement from './pages/Payment';
import Product from './pages/Product';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Cart />} />
      <Route path="/contact" element={<Checkout />} />
      <Route path="/contact" element={<Payement />} />
      <Route path="/contact" element={<Product />} />
    </Routes>
  );
};

export default App;
