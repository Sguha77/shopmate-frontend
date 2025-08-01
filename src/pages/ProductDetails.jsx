import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://shopmate-backend.onrender.com';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/cart/add`, { productId: product._id });
      alert('Added to cart!');
    } catch (err) {
      console.error(err);
      alert('Failed to add to cart');
    }
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-red-600 text-center">{error}</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-3">{product.name}</h1>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <p className="text-2xl text-red-600 font-bold mb-4">₹{product.price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
