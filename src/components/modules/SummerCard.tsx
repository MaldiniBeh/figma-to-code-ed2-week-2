import { FC } from 'react';
import Button from '../elements/Button';
import CartIcon from '../elements/icons/Cart';

interface ICard {
  title: string;
  price: number;
  img: string;
  altText: string;
  // displayButtomBtn: boolean;
  // displayTopBtn: boolean;
}
const SummerCard: FC<ICard> = (props) => {
  //displayButtomBtn, displayTopBtn,
  const { img, altText, title, price } = props;
  return (
    <div className="flex font-archivo flex-col space-y-4">
      <div className="relative group w-full h-80">
        <img
          src={img}
          className="w-full h-full object-cover object-center rounded-3xl"
          alt={altText}
        />
        <div
          className="absolute inset-0 bg-gray-900 opacity-0
         hover:opacity-60 rounded-3xl transition-opacity duration-1000"
        ></div>

        <Button
          children="Get off 20%"
          className="absolute top-4 left-2 bg-white text-black text-sm rounded-full px-2 py-1 text-center"
        />

        {/* {displayTopBtn && (
          <Button
            children="Get off 20%"
            className="absolute top-4 left-2 bg-white text-black text-sm rounded-full px-2 py-1 text-center"
          />
        )} */}
        {/* {displayButtomBtn && (
          <div className="text-xs space-x-1 center-custom font-bold uppercase absolute bottom-2 left-0 right-0 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button className="text-black py-2 px-3 rounded-full bg-white">
              <div className="flex space-x-1">
                <CartIcon className="h-4" />
                <span className="text-black uppercase"> Add to cart </span>
              </div>
            </Button>
            <Button
              children="Buy now"
              className="text-white text-xs border border-white rounded-full px-4 py-2 text-center uppercase"
            />
          </div>
        )} */}

        <div
          className="text-xs space-x-1 center-custom font-bold uppercase 
        absolute bottom-2 left-0 right-0 flex justify-between px-4 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button className="text-black py-2 px-2 rounded-full bg-white">
            <div className="flex space-x-1">
              <CartIcon className="h-4" />
              <span className="text-black uppercase text-xs">Add to cart</span>
            </div>
          </Button>
          <Button
            children="Buy now"
            className="text-white text-xs border border-white rounded-full px-4 py-2 text-center uppercase"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-black text-3xl font-bold uppercase">{title}</span>
        <span className="text-gray-500 text-2xl font-bold">${price}</span>
      </div>
    </div>
  );
};

export default SummerCard;
