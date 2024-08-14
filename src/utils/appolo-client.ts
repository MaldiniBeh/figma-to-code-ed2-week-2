import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { IProducts } from './common-interface';

const client = new ApolloClient({
  uri: import.meta.env.VITE_MOCK_API_URL,
  cache: new InMemoryCache(),
});
export const fetchProducts = async (): Promise<IProducts[]> => {
  const responseGql = await client.query({
    query: gql`
      {
        products(first: 6) {
          edges {
            node {
              id
              title
              description
              featuredImage {
                id
                url
              }
              variants(first: 1) {
                edges {
                  node {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  if (!responseGql.data || !responseGql.data.products) {
    throw new Error('Data not available');
  }

  return responseGql.data.products.edges.map((edge: any) => {
    return {
      id: edge.node.id,
      title: edge.node.title,
      description: edge.node.description,
      featuredImage: edge.node.featuredImage,
      variants: edge.node.variants,
    } as IProducts;
  });
};
