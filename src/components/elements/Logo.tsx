import { FC } from 'react';
interface Ilogo {
  type: 'white' | 'black';
}

const Logo: FC<Ilogo> = ({ type }) => {
  return (
    <div
      className={`uppercase text-5xl font-chillax ${type === 'white' ? 'text-outline-white' : ' text-outline-black'}`}
    >
      Ballamas
    </div>
  );
};

export default Logo;
