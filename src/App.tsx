import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import { HearderData } from './utils/data';

const App = () => {
  return (
    <div className="bg-white flex flex-col">
      <div className="bg-black text-center p-4 text-white">
        Sign up and get 20% off for all new arrivals collections
      </div>
      <div className="px-32">
        <Header headerData={HearderData}></Header>
      </div>
      <Footer />
    </div>
  );
};

export default App;
