import { BrowserRouter } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
      
      {/* Global Toast */}
      <div id="cart-toast" className="fixed top-4 right-4 hidden z-50">
        <div className="alert alert-success shadow-lg">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span>เพิ่มลงตะกร้าเรียบร้อย</span>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;