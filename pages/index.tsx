import type { NextPage } from 'next';
import Head from 'next/head';

import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Next App</title>
      </Head>

      <main>
        Hello World
      </main>

      <footer>
        I'm a footer
      </footer>
    </div>
  )
}

export default Home
