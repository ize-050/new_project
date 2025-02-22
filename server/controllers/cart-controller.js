import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addToCart = async (req, res) => {
  const { customerID, productID, qty } = req.body;
  
  try {
    // หา product เพื่อคำนวณราคารวม
    const product = await prisma.product.findUnique({
      where: { productID },
      include: { discounts: true }
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // คำนวณราคารวม
    const total = product.price * qty;

    // เช็คว่ามีสินค้านี้ในตะกร้าแล้วหรือไม่
    const existingCartItem = await prisma.cart.findFirst({
      where: {
        customerID,
        productID
      }
    });

    let cartItem;
    if (existingCartItem) {
      // ถ้ามีแล้วให้อัพเดทจำนวน
      cartItem = await prisma.cart.update({
        where: { cartID: existingCartItem.cartID },
        data: {
          qty: existingCartItem.qty + qty,
          total: existingCartItem.total + total
        },
        include: { product: true }
      });
    } else {
      // ถ้ายังไม่มีให้สร้างใหม่
      cartItem = await prisma.cart.create({
        data: {
          customerID,
          productID,
          qty,
          total
        },
        include: { product: true }
      });
    }

    res.json(cartItem);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getCart = async (req, res) => {
  const { customerID } = req.params;
  
  try {
    const cartItems = await prisma.cart.findMany({
      where: { customerID },
      include: { product: true }
    });
    
    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: error.message });
  }
};