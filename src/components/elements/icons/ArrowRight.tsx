import { FC } from 'react';
import { IIcon } from '../../../utils/common-interface';

const ArrowRightIcon: FC<IIcon> = (props) => {
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
        d="M15 6.66669L18.3333 10L15 13.3334"
        stroke="#1D1D1D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.6665 10H18.3332"
        stroke="#1D1D1D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
