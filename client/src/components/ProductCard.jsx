import useCartStore from '../store/cart-store';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const addToCart = useCartStore(state => state.addToCart);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    try {
      await addToCart(product.productID, 1);
      document.getElementById('cart-toast').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('cart-toast').classList.add('hidden');
      }, 3000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('เกิดข้อผิดพลาดในการเพิ่มสินค้า');
    }
  };

  const calculateDiscountedPrice = () => {
    if (!product.discounts?.length) return product.price;
    const discount = product.discounts[0];
    return discount.discountType === 'percentage' 
      ? product.price * (1 - discount.discountValue / 100)
      : product.price - discount.discountValue;
  };

  const discountedPrice = calculateDiscountedPrice();

  return (
    <div 
      className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="relative overflow-hidden px-4 pt-4">
        {/* รูปภาพสินค้า */}
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          {product.productImage ? (
            <img 
              src={product.productImage} 
              alt={product.productName}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          ) : (
            <div className="w-full h-full bg-base-200 flex items-center justify-center">
              <span className="text-base-content/50">ไม่มีรูปภาพ</span>
            </div>
          )}
          
          {/* Overlay with quick actions */}
          <div 
            className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = `/products/${product.productID}`;
              }}
              className="btn btn-circle btn-info btn-md transform hover:scale-110 transition-transform duration-200"
              
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={handleAddToCart}
              disabled={product.stockQuantity === 0}
              className="btn btn-circle btn-primary btn-md transform hover:scale-110 transition-transform duration-200"
              title="เพิ่มลงตะกร้า"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Badge ส่วนลด */}
        {product.discounts?.length > 0 && (
          <div className="badge badge-error badge-lg absolute top-6 right-6 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
            ลด {product.discounts[0].discountValue}
            {product.discounts[0].discountType === 'percentage' ? '%' : ' ฿'}
          </div>
        )}
      </figure>

      <div className="card-body">
        <h4 className="card-title text-base-content group-hover:text-primary transition-colors duration-300">
          {product.productName}
          {product.stockQuantity === 0 && (
            <div className="badge badge-outline animate-pulse">สินค้าหมด</div>
          )}
        </h4>
        
        <p className="text-base-content/70 text-sm line-clamp-2 group-hover:text-base-content/90 transition-colors duration-300">
          {product.description}
        </p>

        <div className="flex justify-between items-end mt-4">
          <div className="flex items-baseline gap-2">
            {product.discounts?.length > 0 && (
              <span className="text-base-content/50 line-through text-sm">
                ฿{product.price.toFixed(2)}
              </span>
            )}
            <span className="text-1xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
              ฿{discountedPrice.toFixed(2)}
            </span>
          </div>         
        </div>
        <div>
        <span className="text-sm text-base-content/70">
            เหลือ {product.stockQuantity} ชิ้น
          </span>
        </div>

        <div className="card-actions mt-4 flex gap-2">
          <a 
            href={`/products/${product.productID}`}
            className="btn btn-info flex-1 gap-2"
          >
            <Eye className="w-5 h-5" />
            
          </a>
          <button
            onClick={handleAddToCart}
            disabled={product.stockQuantity === 0}
            className={`btn flex-1 gap-2 transform transition-all duration-300 ${
              product.stockQuantity === 0 
                ? 'btn-disabled' 
                : 'btn-primary hover:scale-105 hover:shadow-lg'
            }`}
          >
            <ShoppingCart className={`w-5 h-5 ${!product.stockQuantity === 0 && 'group-hover:animate-bounce'}`} />
            {product.stockQuantity === 0 ? 'สินค้าหมด' : ''}
          </button>
        </div>
      </div>

      {/* Toast notification */}
      {/* <div id="cart-toast" className="toast toast-end z-50 fixed top-4 right-4 hidden">
        <div className="alert alert-success shadow-lg">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span>เพิ่มลงตะกร้าเรียบร้อย</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;