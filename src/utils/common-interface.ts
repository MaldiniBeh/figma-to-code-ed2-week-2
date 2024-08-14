import { ReactElement } from 'react';

interface IIcon {
  className?: string;
}
interface IHeaderResponsive {
  left: Array<string>;
  right: Array<string | ReactElement>;
}
interface IProducts {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    id: string;
    url: string;
  };
  variants: {
    edges: Array<{
      node: {
        price: {
          amount: number;
          currencyCode: string;
        };
      };
    }>;
  };
}
export type { IIcon, IHeaderResponsive, IProducts };
