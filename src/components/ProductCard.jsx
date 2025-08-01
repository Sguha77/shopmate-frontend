import React from "react";

const ProductCard = ({ product }) => {
  const discount = product.originalPrice && product.price ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100): 0;
  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden p-4 mb-6">
      {/* Main Flex Container: Image Left, Details Right */}
      <div className="flex border rounded-lg p-6 shadow-md max-w-3xl mx-auto bg-white">
        
        {/* IMAGE - Left Side */}
        <div className="flex-shrink-0 bg-white border-x-4 rounded-md flex items-center justify-center "style={{ width: '500px', height: '300px' }}>
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain "
          />
        </div>
         
        {/* DETAILS - Right Side */}
        <div className="space=8px flex flex-col justify-between flex-1">
          <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 ">{product.name}</h2>
          
          <p className="text-gray-600 mb-4">{product.description}</p>
          {/* 🔴 Discount Box */}
{product.originalPrice && product.price && product.originalPrice > product.price && (
  <div className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mt-2">
    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
  </div>
)}
{/* Discounted Price */}
    <div className="text-lg font-bold text-gray-800 mt-1">
      ₹{product.price}
    </div>






          </div>
          


          <div className="flex items-center justify-between mt-4"></div>
          <span className="text-lg font-bold  text-green-600">M.R.P :<span className="line-through"> ₹{product.originalPrice}</span></span>
          
        <div className="flex items-center mb-2">
  <span className="text-sm font-medium text-gray-700 mr-2">Rating :</span>
  {Array.from({ length: 5 }, (_, i) => {
    const full = i + 1 <= product.rating;
    const half = !full && i + 0.5 <= product.rating;

    return (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ width: "16px", height: "16px" }}
        className="inline-block"
        fill={
          full
            ? "#facc15"
            : half
            ? "url(#half-gradient)"
            : "#d1d5db"
        }
      >
        {half && (
          <defs>
            <linearGradient id="half-gradient">
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
        )}
        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.849L19.336 24 12 20.02 4.664 24 6 15.597 0 9.748l8.332-1.73z" />
      </svg>
    );
  })}
  <span className="ml-2 text-sm text-gray-600">{product.rating} / 5</span>
</div>






          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
