
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        discounts: {
          where: {
            isActive: true,
            endDate: {
              gte: new Date()
            }
          }
        }
      }
    });
    
    console.log(products);

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ 
      message: 'Error fetching products',
      error: error.message 
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { categoryId, search } = req.query;
    
    const where = {};
    
    // Filter by category
    if (categoryId) {
      where.categoryID = categoryId;
    }
    
    // Search by name
    if (search) {
      where.productName = {
        contains: search,
       
      };
    }

    const products = await prisma.product.findMany({
      where,
      include: {
        category: true
      }
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { productID: id },
      include: {
        category: true
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};