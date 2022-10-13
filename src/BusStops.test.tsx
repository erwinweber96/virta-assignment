import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';import { getByTestId, render } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import BusStops from "./components/BusStops";
const wait = require('waait');

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
  cache: new InMemoryCache(),
});

describe(BusStops, () => {
  it('should load 5 upcoming bus stop times', async () => {
    const component = render(<ApolloProvider client={client}>
      <BusStops></BusStops>
    </ApolloProvider>);

    await act(async () => {
      await wait(1000); 
    });

    const stoptimes = component.getByTestId('stoptimes');
    expect(stoptimes.childElementCount).toEqual(5);
  });
});
