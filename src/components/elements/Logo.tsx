import { FC } from 'react';
enum LogoType {
  White = 'white',
  Black = 'black',
}
interface Ilogo {
  type: LogoType;
}

const Logo: FC<Ilogo> = ({ type }) => {
  let className = '';
  switch (type) {
    case LogoType.White:
      className = 'bg-blue-500 text-white';
      break;
    case LogoType.Black:
      className = 'bg-blue-500 text-white';
      break;
  }
  return <div className={className}>Ballamas</div>;
};

export default Logo;
