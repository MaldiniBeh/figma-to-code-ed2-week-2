import { FC } from 'react';
interface Ilogo {
  type: 'white' | 'black';
}

const Logo: FC<Ilogo> = ({ type }) => {
  return (
    <div
      className={`uppercase text-2xl ${type === 'white' ? 'text-white' : 'text-black'}`}
    >
      Ballamas
    </div>
  );
};

export default Logo;
