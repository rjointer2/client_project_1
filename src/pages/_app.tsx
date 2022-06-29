
// next
import type { AppProps } from 'next/app';

// apollo client 
import { ApolloProvider } from '@apollo/client';
import client from '../@apollo_client/configs/client';

// styles
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import { io, SocketContext } from '../hooks/useSocket';


function MyApp({ Component, pageProps }: AppProps) {
 return <SSRProvider>
  <SocketContext.Provider value={io} >
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </SocketContext.Provider>
</SSRProvider>
 }
export default MyApp
