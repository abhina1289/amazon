// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import {CartContext} from "../context/CartContext";

// const MiniCart = () => {
//   const { cartItems=[], totalPrice=0} = useContext(CartContext);

//   const totalItems = cartItems.reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   );

//   return (
//     <div className="relative flex items-center space-x-3">
//       <Link
//         to="/cart"
//         className="flex items-center space-x-2 bg-yellow-400 text-black px-3 py-2 rounded-md hover:bg-yellow-500 transition"
//       >
//         <span className="font-medium">Cart</span>
//         <div className="relative">
//           {/* 🛍 Cart Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2A1 1 0 007 20h10a1 1 0 00.9-.6L21 13M7 13h10"
//             />
//           </svg>
//           {/* 🔢 Item Count Badge */}
//           {totalItems > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
//               {totalItems}
//             </span>
//           )}
//         </div>
//       </Link>

//       {/* 💰 Total Price */}
//       <div className="text-sm text-gray-700">
//         <span>Total: </span>
//         <span className="font-semibold">${totalPrice.toFixed(2)}</span>
//       </div>
//     </div>
//   );
// };

// export default MiniCart;
