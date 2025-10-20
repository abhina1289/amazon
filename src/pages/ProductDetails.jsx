import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
// import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  // const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const renderStars = (rating) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < Math.floor(rating) ? "text-[#FF9900]" : "text-gray-300"}
        />
      ))}
      <span className="text-sm text-blue-600 ml-1">{rating}</span>
    </div>
  );

  return (
    <div className="bg-[#EAEDED] min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-[80%] h-[400px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            {renderStars(product.rating)}
            <p className="text-sm text-gray-500 mb-3">
              ({product.reviews?.toLocaleString()} reviews)
            </p>

            <p className="text-3xl font-semibold mb-3">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <button
              onClick={() => addToCart(product)}
              className="w-full md:w-[60%] bg-[#FFD814] hover:bg-[#F7CA00] text-gray-900 text-sm py-2 rounded-full font-medium transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
