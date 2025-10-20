// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductHome from './pages/ProductHome';
// import CartView from './pages/CartView';
import Dashboard from './pages/Dasboard';
import OrderConfirmation from './pages/OrderConfirmation';
import YoursOrders from './pages/YourOrders';
import ProductDetails from './pages/ProductDetails';
import Auth from './pages/Auth';
import './App.css';

function App() {
  // You can manage cart items here and pass to Header
  // Example: const [cartItems, setCartItems] = useState([]);
  
  return (
    <>
      <Header cartItems={[]} /> {/* Pass actual cartItems from your state management */}
      
      <Routes>
        <Route path='/' element={<ProductHome />} />
        {/* <Route path='/cart' element={<CartView />} /> */}
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/your' element={<YoursOrders />} />
        <Route path='/order' element={<OrderConfirmation />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/auth' element={<Auth />} />
        
        {/* Catch-all route for 404 - Page Not Found */}
        <Route path='*' element={
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
            <p className="mt-2">The page you're looking for doesn't exist.</p>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;