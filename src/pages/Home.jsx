import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";
import { fetchProducts } from '../utils/api';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setAllProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

   useEffect(() => {
  fetchProducts()
    .then(data => setProducts(data))
    .catch(error => console.error(error));
}, []);

  // Filter logic
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const user = {
    username: "Subhankar",
    address: "Kolkata, India",
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-20 text-center">
        <div className="relative py-4 px-4">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center text-sm text-gray-700">
            <MdLocationOn className="text-red-500 w-4 h-4 mr-1" />
            <span>
              Deliver to <span className="font-semibold justify-left">{user.username}</span> – {user.address}
            </span>
          </div>
          <h2 className="text-xl font-bold text-center">Shop Our Products</h2>
        </div>

        <h2 className="text-5xl font-extrabold mb-4">Shop the Latest Trends</h2>
        <p className="text-lg">From sneakers to smartwatches — all in one place.</p>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h2>

        {/* 🔍 Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder=" 🔍 Search Shopmate.in"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product List or Loader */}
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </div>
    </>
  );
};

export default Home;
