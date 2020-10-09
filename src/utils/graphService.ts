import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HOST_URI } from './path';
import { call } from 'redux-saga/effects';

const client = new ApolloClient({
  uri: `${HOST_URI}graphql/`,
  cache: new InMemoryCache({
    addTypename: false
  })
});

export function* graphService(type: any, query: any) {
  const response = yield call([client, type], query);
  return response;
}
