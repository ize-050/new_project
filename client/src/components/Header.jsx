import CartIcon from './CartIcon';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-base-100 border-b">
      <div className="container mx-auto h-16">
        <div className="flex h-full items-center gap-8 px-4">
          {/* Logo */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <a href="/" className="text-xl font-bold mr-2">
                Manga Store
              </a>
            </label>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="/" className="hover:text-primary">หน้าแรก</a>
            <a href="/products" className="hover:text-primary">สินค้า</a>
          </nav>

          {/* Search Bar */}
          <div className="flex-1">
            <form onSubmit={handleSearch}>
              <div className="join w-full max-w-md">
                <input
                  type="text"
                  placeholder="ค้นหามังงะ..."
                  className="input input-bordered join-item w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn join-item">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Cart */}
          <a href="/cart" className="btn btn-ghost btn-circle">
            <CartIcon />
          </a>

          {/* Mobile Menu */}
          <button className="btn btn-ghost btn-circle md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;