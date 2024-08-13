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
        <span className="text-md text-gray-500">
          Our latest collection, where classic and contemporary styles converges
          in perfect harmony
        </span>
      </div>

      <div className="flex space-x-4">
        <div className="relative group w-64 h-80 md:h-full md:w-2/3">
          <img
            src={jordanImage}
            className="w-full h-80 object-cover object-center rounded-3xl md:h-[42vh]"
            alt="jordan"
          />
          <div
            className="absolute inset-0 bg-gray-600 opacity-20 rounded-3xl
        "
          ></div>

          <Button
            className="text-xs space-x-1 font-extrabold uppercase absolute bottom-2 left-12 right-0 
          flex justify-between px-4 bg-white py-3 rounded-full md:mx-10 md:left-22 md:right-16"
          >
            <div className="flex space-x-1">
              <span className="text-black uppercase md:px-4"> Learn More </span>
              <ArrowIcon className="h-4" />
            </div>
          </Button>
        </div>

        <div
          className="flex-col relative center-custom bg-footer bg-cover 
        bg-center rounded-3xl space-y-2 md:h-[42vh]"
        >
          <div
            className="absolute inset-0 text-white bg-gray-600 opacity-20 rounded-3xl
        "
          ></div>
          <span className="text-classic font-chillax text-5xl uppercase">
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
