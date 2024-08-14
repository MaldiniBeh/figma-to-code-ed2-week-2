import Button from '../components/elements/Button';
import Collection from '../components/sections/Home/Collection';
import OverviewHome from '../components/sections/Home/Overview';
import Summer from '../components/sections/Home/Summer';
import { CollectionsHome } from '../utils/data';
const Home = () => {
  return (
    <>
      <OverviewHome />
      <div className="my-8 px-8 center-custom md:px-2 lg:px-32">
        {/* btn Section */}
        <div className="space-x-2 space-y-2 md:space-y-0">
          {CollectionsHome.map((item, index) => (
            <Button
              key={item}
              className={`rounded-full px-3 py-2 text-center
                ${index === 0 ? 'bg-black text-white' : 'bg-white text-black border border-black hover:bg-gray-100'}`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      {/* summer section */}
      <div className="center-custom flex flex-col space-y-16">
        <Summer />
        <Button
          children="View More"
          className="px-6 py-2 text-sm text-center font-bold text-black rounded-full border border-black"
        />
        <Collection />
      </div>
    </>
  );
};

export default Home;
