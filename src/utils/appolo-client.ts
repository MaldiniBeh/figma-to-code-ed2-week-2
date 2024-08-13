import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_MOCK_API_URL,
  cache: new InMemoryCache(),
});

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

export default responseGql;
