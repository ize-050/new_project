import { useEffect } from 'react';
import useCategoryStore from '../store/category-store';
import { BookOpen, ChevronRight } from 'lucide-react';

const CategoryMenu = () => {
  const { categories, fetchCategories, isLoading } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);



  return (
    <div className="w-64 bg-base-100 rounded-xl shadow-lg border border-base-200 overflow-hidden">
      {/* หัวข้อ */}
      <div className="p-4 border-b border-base-200">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          หมวดหมู่มังงะ
        </h2>
      </div>

      {/* รายการหมวดหมู่ */}
      <div className="p-2">
        <a 
          href="/products" 
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors group"
        >
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <BookOpen className="w-4 h-4 text-primary" />
          </div>
          <span className="flex-1">ทั้งหมด</span>
          <ChevronRight className="w-4 h-4 text-base-content/30 group-hover:text-primary transition-colors" />
        </a>

        {categories.map((category) => (
          <a 
            key={category.categoryID}
            href={`/category/${category.categoryID}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors group"
          >
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <span className="flex-1">{category.categoryName}</span>
            <ChevronRight className="w-4 h-4 text-base-content/30 group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>

    </div>
  );
};

export default CategoryMenu;