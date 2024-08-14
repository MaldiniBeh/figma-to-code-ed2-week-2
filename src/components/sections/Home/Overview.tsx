import Button from '../../elements/Button';
import ArrowIcon from '../../elements/icons/Arrow';

const OverviewHome = () => {
  return (
    <>
      <div
        className="text-center font-archivo mx-8 center-custom flex-col bg-custom bg-cover bg-center 
      rounded-3xl space-y-6 md:mx-12 md:h-[30vh] lg:mx-32 lg:h-[60vh]"
      >
        <div className="flex items-center space-x-2">
          <span className="w-12 h-[1px] bg-gray-500"></span>
          <span className="text-gray-100 text-sm">
            We bring new fashion to the world
          </span>
          <span className="w-12 h-[1px] bg-gray-500"></span>
        </div>
        <span
          className="uppercase text-white font-chillax font-extrabold
         text-5xl max-w-xl md:max-w-2xl lg:max-w-4xl"
        >
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
      <div className="px-8 my-12 center-custom md:px-16 lg:px-32">
        <h1 className="text-black text-center text-2xl font-bold font-chillax">
          Discover the latest trends in summer fashion. Shop now and refresh
          your wardrobe with our styling summer shirts.
        </h1>
      </div>
    </>
  );
};

export default OverviewHome;
