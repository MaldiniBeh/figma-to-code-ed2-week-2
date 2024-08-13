import { FC } from 'react';
import UserIcon from '../elements/icons/User';
import SearchIcon from '../elements/icons/Search';
import { IHeaderResponsive } from '../../utils/common-interface';
import HeaderDesktop from '../modules/HeaderDesktop';
import HearderMobile from '../modules/HearderMobile';
// import { Link } from 'react-router-dom';

interface IHeader {
  headerData: IHeaderResponsive;
}
const Header: FC<IHeader> = (props) => {
  const { headerData } = props;
  const accountData = (
    <div className="flex font-archivo space-x-1">
      <UserIcon className="mt-1" />
      <span>{'Account'}</span>
    </div>
  );
  const newDataRight = [...headerData.right];
  newDataRight.splice(2, 0, accountData);
  newDataRight.push(<SearchIcon className="mt-1" />);
  return (
    <div>
      <header className=" border-b text-black py-6">
        <HeaderDesktop left={headerData.left} right={newDataRight} />
        <HearderMobile />
      </header>
    </div>
  );
};

export default Header;
