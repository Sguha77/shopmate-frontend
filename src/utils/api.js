// src/utils/api.js
const BASE_URL = 'https://shopmate-backend.onrender.com'; // your Render URL

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

export const registerUser = async (user) => {
  const res = await fetch(`${BASE_URL}/api/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error('Registration failed');
  return res.json();
};

// Similarly for login, order, cart...
