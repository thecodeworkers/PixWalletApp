import { InMemoryCache } from 'apollo-cache-inmemory';
import { call } from 'redux-saga/effects';
import ApolloClient from 'apollo-boost';

// El host 10.0.0.2 es cuando se trabaja con un emulador
// Si se desea trabajar con el celular se debe levantar el server de python en la red wifi
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
