import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CategoryPage from '../pages/CategoryPage';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/products" element={<Product />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;