import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import ProductList from '../components/ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        console.log('Fetched products:', data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ShopMate Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
