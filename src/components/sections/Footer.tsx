import { FooterData } from '../../utils/data';
import Button from '../elements/Button';
import Input from '../elements/Input';

const Footer = () => {
  return (
    <footer className="bg-black px-24">
      <div className="my-16 flex justify-between">
        <div className="flex flex-col space-y-8 max-w-lg">
          <h1 className="text-white">Logo</h1>
          <span className="text-gray-400 text-md">
            Subscribe to our newsletter for upcoming products and the best
            discount for all items
          </span>
          <div className="flex space-x-2">
            <Input
              className="bg-transparent border rounded-full py-2 blur-none ring-0 w-4/6"
              autoFocus={false}
            />
            <Button
              children="Subscribe"
              className=" border rounded-full px-7 bg-white font-semibold text-black"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(FooterData).map(([item, key]) => (
            <div key={item}>
              <h3 className="text-md font-bold text-white ">{item}</h3>
              <ul className="space-y-1 my-2">
                {key.map((value, index) => (
                  <li key={index} className="text-gray-300">
                    <a href="#">{value}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
