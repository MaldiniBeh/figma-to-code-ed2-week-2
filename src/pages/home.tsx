import Button from '../components/elements/Button';
import OverviewHome from '../components/sections/Home/Overview';
import Summer from '../components/sections/Home/Summer';
import { CollectionsHome } from '../utils/data';
const Home = () => {
  return (
    <div className="mx-2">
      <OverviewHome />
      <div className="my-8 px-32 center-custom">
        {/* btn Section */}
        <div className="space-x-2">
          {CollectionsHome.map((item, index) => (
            <Button
              className={`rounded-full px-3 py-2 text-center
                ${index === 0 ? 'bg-black text-white' : 'bg-white text-black border border-black hover:bg-gray-100'}`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      {/* summer section */}
      <div className="center-custom">
        <Summer />
      </div>
    </div>
  );
};

export default Home;
