import { ReactElement } from 'react';

interface IIcon {
  className?: string;
}
interface IHeaderResponsive {
  left: Array<string>;
  right: Array<string | ReactElement>;
}

export type { IIcon, IHeaderResponsive };
