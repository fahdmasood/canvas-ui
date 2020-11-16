import '../assets/base.css';
import Head from 'next/head';
import Navigation from '../components/navigation';
import Chat from '../components/chat';

const Root = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        />
        <link
          type='image/x-icon'
          sizes='64x64 32x32 24x24 16x16'
          src='/favicon.ico'
        />
      </Head>
      <Navigation />
      <Chat />
      <Component {...pageProps} />
    </>
  );
};

export default Root;
