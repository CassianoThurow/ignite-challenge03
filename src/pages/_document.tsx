import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="http://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet "
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
