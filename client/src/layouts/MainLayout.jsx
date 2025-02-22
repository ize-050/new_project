import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryMenu from '../components/CategoryMenu';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Category Menu */}
          <div className="hidden md:block sticky top-8">
            <CategoryMenu />
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
    
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;