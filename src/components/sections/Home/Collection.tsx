import jordanImage from '../../../assets/images/shacket.png';
import Button from '../../elements/Button';
import ArrowRightIcon from '../../elements/icons/ArrowRight';
const CollectionComponent = () => {
  return (
    <div className="flex flex-col space-y-8 w-3/5">
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
        <div className="relative group w-64 h-80">
          <img
            src={jordanImage}
            className="w-64 h-80 object-cover object-center rounded-3xl"
            alt="jordan"
          />
          <Button className="text-xs space-x-1 center-custom font-bold uppercase absolute bottom-2 left-0 right-0 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-1">
              <ArrowRightIcon className="h-4" />
              <span className="text-black uppercase"> Learn More </span>
            </div>
          </Button>
        </div>

        <div className="flex flex-col bg-footer bg-cover bg-center rounded-3xl space-y-6">
          <span className="text-white text-3xl uppercase">Classic Men</span>
          <span className="text-white text-sm">
            We're changing the way things get made
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionComponent;
