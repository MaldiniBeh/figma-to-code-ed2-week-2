import SummerCard from '../../modules/SummerCard';
import responseGql from '../../../utils/appolo-client';
import { IProducts } from '../../../utils/common-interface';

const Summer = () => {
  const result = responseGql.data.products as IProducts;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-72">
      {result.edges.map((item) => (
        <SummerCard
          key={item.node.id}
          altText={item.node.description}
          // displayButtomBtn={item.displayButtomBtn}
          // displayTopBtn={item.displayTopBtn}
          img={item.node.featuredImage.url}
          price={item.node.variants.edges[0].node.price.amount}
          title={item.node.title}
        />
      ))}
    </div>
  );
};

export default Summer;
