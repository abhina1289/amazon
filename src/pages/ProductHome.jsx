import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Zap } from 'lucide-react';

export default function ProductPage() {
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 129.99,
      description: 'Active noise cancellation with 30-hour battery',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      rating: 4.8,
      reviews: 1234,
      tag: 'Hot Deal'
    },
    {
      id: 2,
      name: 'Smart Watch Ultra',
      price: 299.99,
      description: 'AMOLED display with fitness & health tracking',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      rating: 4.7,
      reviews: 892,
      tag: 'Best Seller'
    },
    {
      id: 3,
      name: 'Portable SSD 2TB',
      price: 189.99,
      description: '1050MB/s transfer speed, rugged design',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
      rating: 4.9,
      reviews: 567,
      tag: 'New'
    },
    {
      id: 4,
      name: 'USB-C Hub 7-in-1',
      price: 49.99,
      description: 'Multiple ports, aluminum construction',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
      rating: 4.6,
      reviews: 445,
      tag: ''
    },
    {
      id: 5,
      name: 'Mechanical Gaming Keyboard',
      price: 149.99,
      description: 'RGB lighting, Cherry MX switches',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
      rating: 4.8,
      reviews: 1456,
      tag: 'Hot Deal'
    },
    {
      id: 6,
      name: 'Ergonomic Mouse Pad',
      price: 24.99,
      description: 'XXL size with non-slip base',
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop',
      rating: 4.5,
      reviews: 789,
      tag: ''
    },
    {
      id: 7,
      name: '4K USB Webcam',
      price: 99.99,
      description: 'Crystal clear video for streaming & calls',
      image: 'https://images.unsplash.com/photo-1606318313316-3ab8823be681?w=500&h=500&fit=crop',
      rating: 4.7,
      reviews: 712,
      tag: 'Best Seller'
    },
    {
      id: 8,
      name: 'Phone Stand Adjustable',
      price: 19.99,
      description: 'Aluminum, fits all smartphones',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop',
      rating: 4.4,
      reviews: 523,
      tag: ''
    },
    {
      id: 9,
      name: 'Wireless Charging Pad',
      price: 29.99,
      description: '15W fast charging, sleek design',
      image: 'https://images.unsplash.com/photo-1591290621749-2c4eae2e1a96?w=500&h=500&fit=crop',
      rating: 4.6,
      reviews: 834,
      tag: 'Hot Deal'
    },
    {
      id: 10,
      name: 'Desk Lamp Pro',
      price: 59.99,
      description: 'LED, USB charging, touch control',
      image: 'https://images.unsplash.com/photo-1565636192335-14f0dd565a44?w=500&h=500&fit=crop',
      rating: 4.5,
      reviews: 456,
      tag: ''
    },
    {
      id: 11,
      name: 'Laptop Stand Premium',
      price: 44.99,
      description: 'Aluminum, adjustable height',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
      rating: 4.7,
      reviews: 678,
      tag: 'New'
    },
    {
      id: 12,
      name: 'Cable Organizer Set',
      price: 14.99,
      description: '5-piece set, silicone material',
      image: 'https://images.unsplash.com/photo-1588521921317-2b79a0d0e46b?w=500&h=500&fit=crop',
      rating: 4.3,
      reviews: 234,
      tag: ''
    },
    {
      id: 13,
      name: 'Wireless Mouse',
      price: 34.99,
      description: 'Ergonomic, 2.4GHz, precision tracking',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
      rating: 4.6,
      reviews: 891,
      tag: 'Best Seller'
    },
    {
      id: 14,
      name: 'Phone Screen Protector',
      price: 9.99,
      description: 'Tempered glass, easy installation',
      image: 'https://images.unsplash.com/photo-1589492477829-5e1b0231444a?w=500&h=500&fit=crop',
      rating: 4.4,
      reviews: 1102,
      tag: ''
    },
    {
      id: 15,
      name: 'Portable Bluetooth Speaker',
      price: 79.99,
      description: 'Waterproof, 12-hour battery',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
      rating: 4.8,
      reviews: 978,
      tag: 'Hot Deal'
    },
    {
      id: 16,
      name: 'Power Bank 30000mAh',
      price: 39.99,
      description: 'Fast charging, dual output ports',
      image: 'https://images.unsplash.com/photo-1609592760137-317b0f57c911?w=500&h=500&fit=crop',
      rating: 4.7,
      reviews: 1567,
      tag: 'Best Seller'
    },
    {
      id: 17,
      name: 'USB-C Cable Pack',
      price: 19.99,
      description: '3-pack, 6ft braided cables',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
      rating: 4.5,
      reviews: 756,
      tag: ''
    },
    {
      id: 18,
      name: 'Monitor Light Bar',
      price: 89.99,
      description: 'Auto-dimming, no glare technology',
      image: 'https://images.unsplash.com/photo-1594492061529-f62c1c01c33a?w=500&h=500&fit=crop',
      rating: 4.9,
      reviews: 445,
      tag: 'New'
    },
    {
      id: 19,
      name: 'Keyboard & Mouse Combo',
      price: 69.99,
      description: 'Wireless, low-profile keys',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
      rating: 4.6,
      reviews: 834,
      tag: 'Hot Deal'
    },
    {
      id: 20,
      name: 'Webcam Ring Light',
      price: 44.99,
      description: 'Professional lighting for streams',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
      rating: 4.7,
      reviews: 612,
      tag: ''
    }
  ];

  const toggleWishlist = (id) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(id)) {
      newWishlist.delete(id);
    } else {
      newWishlist.add(id);
    }
    setWishlist(newWishlist);
    showNotification(newWishlist.has(id) ? '❤ Added to Wishlist' : '🗑 Removed from Wishlist');
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              TechHub
            </h1>
            <p className="text-xs text-slate-500">Premium Tech Products</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart size={24} className="text-slate-700 cursor-pointer" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <Heart size={24} className="text-slate-700 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-white border-l-4 border-blue-500 shadow-lg rounded-lg p-4 animate-slide-in">
          {notification}
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Today's Best Deals</h2>
          <p className="text-slate-600">Discover amazing tech products with exclusive prices</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-blue-200"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-slate-50 h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 p-4"
                />
                
                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap size={12} />
                    {product.tag}
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 transition-all hover:scale-110 shadow-md"
                >
                  <Heart
                    size={18}
                    className={wishlist.has(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col h-48">
                {/* Title */}
                <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 mb-1">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-xs text-slate-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mb-auto">
                  <div className="text-2xl font-bold text-slate-900">
                    ${product.price}
                  </div>
                  <p className="text-xs text-green-600 font-medium">Free delivery</p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mt-4 shadow-md hover:shadow-lg"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 mt-16 py-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400">© 2025 TechHub. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}