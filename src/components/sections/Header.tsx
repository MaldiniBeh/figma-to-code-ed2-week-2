import { FC } from 'react';
import UserIcon from '../elements/icons/User';
import SearchIcon from '../elements/icons/Search';
import { IHeaderResponsive } from '../../utils/common-interface';
import HeaderDesktop from '../modules/HeaderDesktop';
import HearderMobile from '../modules/HearderMobile';

interface IHeader {
  headerData: IHeaderResponsive;
}
const Header: FC<IHeader> = (props) => {
  const { headerData } = props;
  const accountData = (
    <div className="flex space-x-1">
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
      </header>
      <HearderMobile />
    </div>
  );
};

export default Header;
