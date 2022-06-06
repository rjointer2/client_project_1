
// next
import type { AppProps } from 'next/app';

// apollo client 
import { ApolloProvider } from '@apollo/client';
import client from '../@apollo_client/configs/client';
import { GlobalState } from '../hooks/globalStateHook';

// styles
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';


function MyApp({ Component, pageProps }: AppProps) {
  return <SSRProvider>
    <ApolloProvider client={client}>
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
  </ApolloProvider>
  </SSRProvider>
}
export default MyApp
