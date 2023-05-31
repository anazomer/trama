import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Libre+Franklin:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      <link href= 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'/>
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
