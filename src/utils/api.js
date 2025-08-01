const BASE_URL = 'https://shopmate-backend.onrender.com'; // Replace with your actual Render URL

// 📦 Fetch all products
export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

// 👤 Register a user
export const registerUser = async (user) => {
  const res = await fetch(`${BASE_URL}/api/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error('Registration failed');
  return res.json();
};

// 🔐 Login user
export const loginUser = async (credentials) => {
  const res = await fetch(`${BASE_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

// 🛒 Add product to cart
export const addToCart = async (product) => {
  const res = await fetch(`${BASE_URL}/api/cart/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error('Failed to add product to cart');
  return res.json();
};

// 🛒 Get cart items
export const getCartItems = async () => {
  const res = await fetch(`${BASE_URL}/api/cart`);
  if (!res.ok) throw new Error('Failed to get cart items');
  return res.json();
};

// 🛒 Remove item from cart
export const removeFromCart = async (productId) => {
  const res = await fetch(`${BASE_URL}/api/cart/remove/${productId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to remove item from cart');
  return res.json();
};

// 🧾 Place order
export const placeOrder = async (order) => {
  const res = await fetch(`${BASE_URL}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error('Failed to place order');
  return res.json();
};

// 📄 Get all orders
export const getOrders = async () => {
  const res = await fetch(`${BASE_URL}/api/orders`);
  if (!res.ok) throw new Error('Failed to fetch orders');
  return res.json();
};
