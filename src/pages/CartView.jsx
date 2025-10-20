

// function CartView() {
//   const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

//   return (
//     <div className="bg-[#EAEDED] min-h-screen py-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-b pb-3">
//           {/* Shopping Cart */}
//         </h2>

//         {cartItems.length === 0 ? (
//           <p className="text-gray-600 text-center py-10 text-lg">
//             Your cart is empty.
//           </p>
//         ) : (
//           <>
//             <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 border-b pb-4"
//                 >
//                   {/* Product Info */}
//                   <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-28 h-28 object-contain"
//                     />
//                     <div>
//                       <h3 className="text-lg font-medium">{item.name}</h3>
//                       <p className="text-sm text-gray-500">
//                         ${item.price.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Remove Button */}
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-600 hover:underline text-sm font-medium"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Cart Footer */}
//             <div className="flex flex-col sm:flex-row justify-between items-center mt-8 border-t pt-4 gap-4">
//               <button
//                 onClick={clearCart}
//                 className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition w-full sm:w-auto"
//               >
//                 Clear Cart
//               </button>

//               <div className="text-lg font-semibold text-gray-700">
//                 Subtotal ({cartItems.length} items):{" "}
//                 <span className="text-black">
//                   $
//                   {cartItems
//                     .reduce((total, item) => total + item.price, 0)
//                     .toFixed(2)}
//                 </span>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CartView;
