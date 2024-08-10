import Button from '../components/elements/Button';
import ArrowIcon from '../components/elements/icons/Arrow';
import { CollectionsHome } from '../utils/data';

const Home = () => {
  return (
    <div className="mx-2">
      {/* overView */}
      <div className="text-center flex flex-col justify-center items-center mx-32 bg-custom bg-cover bg-center rounded-3xl space-y-6">
        <div className="flex items-center space-x-2">
          <span className="w-12 h-[1px] bg-gray-500"></span>
          <span className="text-gray-100 text-sm">
            We bring new fashion to the world
          </span>
          <span className="w-12 h-[1px] bg-gray-500"></span>
        </div>
        <span className="uppercase text-white font-bold text-4xl max-w-2xl">
          Discoverthe last fashion trends here
        </span>
        <span className="text-white max-w-xl">
          Discover a world of fashion with our meticulously curated outfits.
          Shop now to update your wardrobe with chic and stylish outfits.
        </span>
        <div className="flex">
          <Button
            children="Start shopping"
            className="bg-white text-black text-center rounded-full px-5 py-2"
          />
          <Button
            className="bg-white text-black rounded-full px-5"
            children={<ArrowIcon className="rounded-full" />}
          />
        </div>
      </div>
      {/* landing Text */}
      <div className="px-32 my-12 center-custom">
        <h1 className="text-black text-center text-2xl font-bold">
          Discover the latest trends in summer fashion. Shop now and refresh
          your wardrobe with our styling summer shirts.
        </h1>
      </div>

      {/* Summer */}
      <div className="my-8 px-32 center-custom">
        {/* btn Section */}
        <div className="space-x-2">
          {CollectionsHome.map((item, index) => (
            <Button
              className={`rounded-full px-3 py-2 text-center 
                ${index === 0 ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      {/* Card section */}
      <div className="center-custom">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-air hover:bg-gray-100 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
