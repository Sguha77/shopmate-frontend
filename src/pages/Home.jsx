import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { MdLocationOn } from "react-icons/md";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = {
    username: "Subhankar",
    address: "Kolkata, India",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError("⚠️ Failed to fetch products. Please try again.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-20 text-center relative">
        <div className="absolute left-4 top-4 flex items-center text-sm bg-white text-gray-800 px-3 py-1 rounded shadow-md">
          <MdLocationOn className="text-red-500 w-4 h-4 mr-1" />
          <span>
            Deliver to <span className="font-semibold">{user.username}</span> – {user.address}
          </span>
        </div>
        <h2 className="text-5xl font-extrabold mb-4">Shop the Latest Trends</h2>
        <p className="text-lg">From sneakers to smartwatches — all in one place.</p>
      </div>

      {/* Product List Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h2>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder=" 🔍 Search Shopmate.in"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p className="text-center text-gray-500">No products match your search.</p>
        )}
      </div>
    </>
  );
};

export default Home;
