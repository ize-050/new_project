import { useEffect } from 'react';
import { ShoppingCart } from 'lucide-react'; // ไอคอนรูปตะกร้าจาก lucide-react
import useCartStore from '../store/cart-store';

const CartIcon = () => {
  const { cartItems, fetchCart } = useCartStore();

  // โหลดข้อมูลตะกร้าเมื่อ component ถูกโหลด
  useEffect(() => {
    fetchCart();
  }, []);

  // นับจำนวนสินค้าในตะกร้าทั้งหมด
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="relative cursor-pointer">
      <ShoppingCart className="w-6 h-6" />
      {/* ถ้ามีสินค้าในตะกร้า จะแสดงจำนวนเป็นวงกลมสีแดง */}
      {totalItems > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {totalItems}
        </div>
      )}
    </div>
  );
};

export default CartIcon;