import { InMemoryCache } from 'apollo-cache-inmemory';
import { call } from 'redux-saga/effects';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://10.0.2.2:5000/graphql/',
  cache: new InMemoryCache({
    addTypename: false
  })
});

export function* graphService(type: any, query: any) {
  const response = yield call([client, type], query);
  return response;
}
