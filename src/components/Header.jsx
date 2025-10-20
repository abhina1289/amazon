// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, MapPin, ChevronDown } from 'lucide-react';

const Header = ({ cartItems = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  return (
    <nav className="bg-[#131921] text-white sticky top-0 z-50 shadow-md">
      {/* Top Header */}
      <div className="bg-[#131921] border-b border-[#3a4553]">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between px-4 py-2 gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-white text-2xl font-bold border-2 border-transparent hover:border-white rounded px-2 py-1 transition">
              amazon
            </div>
          </Link>

          {/* Deliver to Location */}
          <Link to="/" className="hidden md:flex items-center gap-1 border border-transparent hover:border-white rounded px-2 py-1 transition">
            <MapPin size={20} className="mb-2" />
            <div className="flex flex-col text-xs">
              <span className="text-gray-300">Delivering to Surat 394210</span>
              <span className="font-bold text-sm">Update location</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-3xl">
            <div className="flex w-full bg-white rounded-md overflow-hidden">
              <select className="bg-gray-100 text-gray-800 px-3 text-sm border-r border-gray-300 outline-none cursor-pointer">
                <option>All</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home</option>
                <option>Books</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="flex-grow px-3 py-2 text-black text-sm outline-none"
              />
              <button className="bg-[#febd69] px-4 hover:bg-[#f3a847] transition">
                <Search size={20} className="text-black" />
              </button>
            </div>
          </div>

          {/* Country Flag */}
          <div className="hidden lg:flex items-center gap-1 border border-transparent hover:border-white rounded px-2 py-1 cursor-pointer transition">
            <span className="text-xl">🇮🇳</span>
            <span className="font-bold text-sm">EN</span>
            <ChevronDown size={14} />
          </div>

          {/* Account & Lists Dropdown */}
          <div 
            className="hidden md:flex relative"
            onMouseEnter={() => setAccountDropdown(true)}
            onMouseLeave={() => setAccountDropdown(false)}
          >
            <Link
              to="/auth"
              className="flex flex-col border border-transparent hover:border-white rounded px-2 py-1 transition"
            >
              <span className="text-xs text-gray-300">Hello, sign in</span>
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm">Account & Lists</span>
                <ChevronDown size={14} />
              </div>
            </Link>

            {/* Dropdown Menu */}
            {accountDropdown && (
              <div className="absolute top-full right-0 mt-1 w-80 bg-white text-black rounded shadow-lg py-4 px-6">
                <Link
                  to="/auth"
                  className="block w-full bg-[#ffd814] hover:bg-[#f7ca00] text-center py-2 rounded-md font-medium text-sm mb-4 transition"
                >
                  Sign in
                </Link>
                <div className="text-xs text-gray-600 text-center mb-4">
                  New customer? <Link to="/auth" className="text-[#007185] hover:text-[#c7511f] hover:underline">Start here.</Link>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-bold text-sm mb-2">Your Lists</h3>
                  <Link to="/your" className="block text-sm text-gray-700 hover:text-[#c7511f] hover:underline py-1">Your Orders</Link>
                  <Link to="/your" className="block text-sm text-gray-700 hover:text-[#c7511f] hover:underline py-1">Your Wish List</Link>
                  <Link to="/dash" className="block text-sm text-gray-700 hover:text-[#c7511f] hover:underline py-1">Your Account</Link>
                </div>
              </div>
            )}
          </div>

          {/* Returns & Orders */}
          <Link
            to="/your"
            className="hidden md:flex flex-col border border-transparent hover:border-white rounded px-2 py-1 transition"
          >
            <span className="text-xs text-gray-300">Returns</span>
            <span className="font-bold text-sm">& Orders</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="hidden md:flex items-center gap-2 border border-transparent hover:border-white rounded px-2 py-1 transition relative"
          >
            <div className="relative">
              <ShoppingCart size={32} className="text-white" strokeWidth={1.5} />
              {cartItems?.length > 0 && (
                <span className="absolute -top-1 left-4 bg-[#f08804] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            <span className="font-bold text-sm mt-3">Cart</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="hidden md:block bg-[#232f3e] py-2">
        <div className="max-w-[1500px] mx-auto px-4 flex items-center gap-6 text-sm">
          <Link to="/" className="flex items-center gap-1 hover:border border-white rounded px-2 py-1 transition">
            <Menu size={20} />
            <span className="font-bold">All</span>
          </Link>
          <Link to="/" className="hover:border border-white rounded px-2 py-1 transition">Amazon miniTV</Link>
          <Link to="/" className="hover:border border-white rounded px-2 py-1 transition">Sell</Link>
          <Link to="/" className="hover:border border-white rounded px-2 py-1 transition">Best Sellers</Link>
          <Link to="/" className="hover:border border-white rounded px-2 py-1 transition">Today's Deals</Link>
          <Link to="/" className="hover:border border-white rounded px-2 py-1 transition">Mobiles</Link>
          <Link to="/" className="hover:border border-white rounded px-2 py-1 transition">Customer Service</Link>
          <Link to="/" className="hover:border border-white rounded px-2 py-1 transition">Electronics</Link>
          <Link to="/" className="hover:border border-white rounded px-2 py-1 transition">Fashion</Link>
          <Link to="/" className="hover:border border-white rounded px-2 py-1 transition">Home & Kitchen</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#232F3E] px-4 py-4 flex flex-col space-y-3">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#FF9900] transition-colors text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/your"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#FF9900] transition-colors text-base font-medium"
          >
            Returns & Orders
          </Link>
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center hover:text-[#FF9900] transition-colors text-base font-medium"
          >
            <ShoppingCart className="mr-2" size={20} /> Cart ({cartItems?.length || 0})
          </Link>

          {/* Mobile Search */}
          <div className="flex items-center bg-white rounded-md overflow-hidden mt-2">
            <input
              type="text"
              placeholder="Search Amazon"
              className="flex-grow px-3 py-2 text-black text-sm outline-none"
            />
            <button className="bg-[#febd69] px-3 py-2 hover:bg-[#f3a847] transition">
              <Search size={18} className="text-black" />
            </button>
          </div>

          {/* Mobile Sign In Button */}
          <Link
            to="/auth"
            onClick={() => setMenuOpen(false)}
            className="bg-[#ffd814] hover:bg-[#f7ca00] text-black font-semibold px-4 py-2 mt-3 rounded-md text-center transition"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;