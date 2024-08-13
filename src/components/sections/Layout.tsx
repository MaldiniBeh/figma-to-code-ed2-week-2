import { FC } from 'react';
import { HearderData } from '../../utils/data';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white font-archivo flex flex-col min-h-screen">
      <div className="bg-black text-center p-4 text-white">
        Sign up and get 20% off for all new arrivals collections
      </div>
      <div className="px-32">
        <Header headerData={HearderData} />
      </div>
      <div className="flex-grow my-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
