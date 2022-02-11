import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: 'https://api.spacex.land/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const spaceXApolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
