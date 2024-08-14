import { FooterData } from '../../utils/data';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Logo from '../elements/Logo';

const Footer = () => {
  return (
    <footer className="mt-8 bg-black px-8 md:mt-12 md:px-24">
      <div className="my-8 flex flex-col space-y-8 md:my-16 lg:flex-row lg:space-y-0 lg:justify-between">
        <div className="flex flex-col space-y-4 md:space-y-8 max-w-lg">
          <Logo type="white" />
          <span className="text-gray-400 text-md">
            Subscribe to our newsletter for upcoming products and the best
            discount for all items
          </span>
          <div className="flex space-x-2">
            <Input
              className="bg-transparent text-white px-2 border rounded-full py-2 blur-none ring-0 w-4/6"
              defaultValue="Your email"
              autoFocus={false}
            />
            <Button
              children="Subscribe"
              className=" border rounded-full px-7 bg-white font-semibold text-black"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
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
      <span className="text-gray-600 text text-sm mb-16 center-custom">
        © BALLAMAS {new Date().getFullYear()} by waris
      </span>
    </footer>
  );
};

export default Footer;
