import { Html, Head, Main, NextScript } from 'next/document'
import { getAnalytics } from 'firebase/analytics'
import app from '../firebase'
import { useEffect } from 'react'

export default function Document() {
  useEffect(() => {
    getAnalytics(app);
  }, []);
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
