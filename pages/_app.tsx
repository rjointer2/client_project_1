
// next
import type { AppProps } from 'next/app';

// apollo client 
import { ApolloProvider } from '@apollo/client';
import client from '../apollo_client/configs/client';
import { GlobalState } from '../hooks/globalStateHook';

// apollo client


function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
  </ApolloProvider>
}
export default MyApp
