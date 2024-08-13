import { FC } from 'react';
import { IHeaderResponsive } from '../../utils/common-interface';
import Logo from '../elements/Logo';

const HeaderDesktop: FC<IHeaderResponsive> = (props) => {
  const { right, left } = props;
  return (
    <nav className="flex justify-between items-center" id="menu">
      {/* <Link to="/">Home</Link> */}
      <div className="flex space-x-6">
        {left.map((items, index) => (
          <a key={index} href="#" className="">
            {items}
          </a>
        ))}
      </div>
      <Logo type="black" />
      <div className="flex space-x-6">
        {right.map((items, index) => (
          <a href="#" key={index} className="">
            {items}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default HeaderDesktop;
