import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useEffect } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-8">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-xs h-auto object-contain bg-gray-100 rounded-lg border"
          />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-2xl font-semibold text-green-600 mb-6">₹{product.price}</div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 w-full md:w-fit">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

