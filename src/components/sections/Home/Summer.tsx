import SummerCard from '../../modules/SummerCard';
import { fetchProducts } from '../../../utils/appolo-client';
import { IProducts } from '../../../utils/common-interface';
import { useEffect, useState } from 'react';

const Summer = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="center-custom text-3xl font-archivo font-bold text-black">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="center-custom text-3xl font-archivo font-bold text-black">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 mx-8 md:mx-20 lg:mx-72">
      {products.map((item) => (
        <SummerCard
          key={item.id}
          altText={item.description}
          img={item.featuredImage.url}
          price={item.variants.edges[0].node.price.amount}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Summer;
