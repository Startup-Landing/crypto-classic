/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */
/** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/

import '@fontsource/archivo';
import '@fontsource/archivo/600.css';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';

export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return <Component {...pageProps} />;
}
