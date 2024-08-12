import { SummerData } from '../../../utils/data';
import SummerCard from '../../modules/SummerCard';
import airImage from '../../../assets/images/air.png';

const Summer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {SummerData.map((item) => (
        <SummerCard
          key={item.altText}
          altText={item.altText}
          displayButtomBtn={item.displayButtomBtn}
          displayTopBtn={item.displayTopBtn}
          img={airImage}
          price={item.price}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Summer;
