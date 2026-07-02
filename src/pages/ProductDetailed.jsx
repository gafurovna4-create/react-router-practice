import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/products';
import Loader from '../components/Loader';

const ProductDetailed = () => {
  const { id } = useParams();
  const [detailed, setDetailed] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setDetailed(res));
  }, [id]);

  if (!detailed) return <Loader />;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold">{detailed.title}</h1>
      <p className="text-xl text-blue-600">${detailed.price}</p>
      {detailed.images && detailed.images.length > 0 && (
        <img src={detailed.images[0]} alt={detailed.title} className="w-full max-w-lg mt-4" />
      )}
    </div>
  );
};

export default ProductDetailed;
