import Script from 'next/script'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';

var GTM_KEY = process.env.NEXT_PUBLIC_GTM_KEY;

export default function MyApp({ Component, pageProps }) {
  return <>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_KEY}');
      `}
    </Script>
    <Component {...pageProps} />
  </>
}
