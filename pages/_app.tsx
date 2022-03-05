
// next
import type { AppProps } from 'next/app';

// apollo client 
import { ApolloProvider } from '@apollo/client';
import client from '../apollo_client/configs/client';

// apollo client


function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
}
export default MyApp
