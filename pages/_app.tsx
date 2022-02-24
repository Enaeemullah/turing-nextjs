import Layout from '../components/Layout';
import { useEffect } from 'react';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
// import { Html } from 'next/document';
import 'inter-ui/inter.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap');
  // }, []);
  return (
    <GeistProvider>
      {/* <CssBaseline /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
}

export default MyApp;
