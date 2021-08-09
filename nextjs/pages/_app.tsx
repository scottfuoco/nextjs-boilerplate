import { Provider } from 'next-auth/client';

import Header from '@/components/Layout/Header';
import Wrapper from '@/components/Layout/Wrapper';

import '@/styles/globals.css';
import '@/styles/typography.css';
import '@/styles/form.css';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Header />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Provider>
    </>
  );
}

export default App;
