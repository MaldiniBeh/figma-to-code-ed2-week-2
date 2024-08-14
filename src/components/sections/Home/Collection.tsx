import jordanImage from '../../../assets/images/shacket.png';
import Button from '../../elements/Button';
import ArrowIcon from '../../elements/icons/Arrow';
const CollectionComponent = () => {
  return (
    <div className="flex flex-col font-archivo space-y-8 lg:w-3/5">
      <div className="text-center">
        <h1 className="text-black text-4xl font-bold uppercase">
          Our collection
        </h1>
        <div className="px-6 md:px-0">
          <span className="text-md text-center text-gray-500 md:px-0">
            Our latest collection, where classic and contemporary styles
            converges in perfect harmony.
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mx-4 md:mx-0 md:flex-row md:space-y-0 md:space-x-4">
        <div className="relative group h-[50vh]  md:w-full md:h-full lg:h-80 lg:w-64">
          <img
            src={jordanImage}
            className="w-full h-[50vh] md:h-[42vh] lg:h-80 lg:w-64 object-cover object-center rounded-3xl"
            alt="jordan"
          />
          <div
            className="absolute inset-0 bg-gray-600 opacity-20 rounded-3xl
        "
          ></div>
          <div className="center-custom">
            <Button
              className="text-xs space-x-1 font-extrabold uppercase absolute bottom-4 
          flex px-4 bg-white py-3 
          rounded-full"
            >
              <div className="flex space-x-1">
                <span className="text-black uppercase md:px-4 lg:px-0">
                  Learn More
                </span>
                <ArrowIcon className="h-4" />
              </div>
            </Button>
          </div>
        </div>

        <div
          className="flex-col relative center-custom bg-footer bg-cover 
        bg-center rounded-3xl h-[60vh] space-y-2 w-full md:h-[42vh] lg:h-[50vh] lg:w-4/5"
        >
          <div
            className="absolute inset-0 text-white bg-gray-600 opacity-20 rounded-3xl
        "
          ></div>
          <span className="text-classic font-chillax font-extrabold text-5xl uppercase">
            Classic Men
          </span>
          <span className="text-white">
            We're changing the way things get made
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionComponent;
