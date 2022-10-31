import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
// import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/Layout'

// Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    // <CacheProvider value={emotionCache}>
    <>
    <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout > 
         <Component {...pageProps} />
        </Layout>
        
      </ThemeProvider>
    </>
      
    // </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};



// import Layout from '../components/Layout'
// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return (

//   <Layout>
//     <Component {...pageProps} />
//   </Layout>
//   )
// }

// export default MyApp
