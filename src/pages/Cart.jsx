import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://shopmate-backend.onrender.com';

  // Fetch cart items
  const fetchCartItems = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/cart`);
      setCartItems(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load cart items.');
    } finally {
      setLoading(false);
    }
  };

  // Remove item from cart
  const handleRemove = async (productId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/cart/remove/${productId}`);
      setCartItems(cartItems.filter(item => item._id !== productId));
    } catch (err) {
      console.error(err);
      alert('Failed to remove item.');
    }
  };

  // Place order
  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return alert('Cart is empty!');

    try {
      const order = {
        items: cartItems,
        total: cartItems.reduce((total, item) => total + item.price, 0),
        date: new Date().toISOString(),
      };

      const res = await axios.post(`${BACKEND_URL}/api/orders`, order);

      setSuccessMsg('Order placed successfully!');
      setCartItems([]); // Clear cart
    } catch (err) {
      console.error(err);
      alert('Failed to place order.');
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-600 text-center p-4">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {successMsg && (
        <div className="bg-green-100 text-green-800 p-3 mb-4 rounded">
          {successMsg}
        </div>
      )}

      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between bg-white shadow p-4 rounded">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-700">₹{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-lg mt-4">
            Total: ₹{totalPrice}
          </div>

          <div className="text-right mt-4">
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
