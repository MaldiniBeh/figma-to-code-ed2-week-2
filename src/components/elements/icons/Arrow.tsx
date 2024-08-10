import { FC } from 'react';
import { IIcon } from '../../../utils/common-interface';

const ArrowIcon: FC<IIcon> = (props) => {
  const { className } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.8335 5.83331H14.1668V14.1666"
        stroke="#1D1D1D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.8335 14.1666L14.1668 5.83331"
        stroke="#1D1D1D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
