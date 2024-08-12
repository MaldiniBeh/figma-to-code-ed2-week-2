import Button from '../../elements/Button';
import ArrowIcon from '../../elements/icons/Arrow';

const OverviewHome = () => {
  return (
    <>
      <div className="text-center center-custom flex-col mx-32 bg-custom bg-cover bg-center rounded-3xl space-y-6">
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
    </>
  );
};

export default OverviewHome;
