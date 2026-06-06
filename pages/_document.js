import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Blessing & Dennis — August 1, 2026 · Abeokuta, Ogun
" />
        <meta property="og:title" content="Blessing & Dennis — August 1, 2026" />
        <meta property="og:description" content="We're getting married! Join us on August 1st, 2026 at St.Matthias Hall, Ajayi Crowther Seminary
, Abeokuta, Ogun
." />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
