import React, { useState, useEffect } from 'react';
import { getProducts } from '../api'
import Loader from '../components/Loader';
import Error from '../components/Error';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div>
      <div className='flex justify-between py-6'>
        <button className='border py-2 px-4 rounded-2xl bg-black text-white'>
            Back
        </button>
        <p className='font-bold text-xl'>Products</p>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {data.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;