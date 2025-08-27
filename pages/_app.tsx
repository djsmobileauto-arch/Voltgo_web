// pages/_app.tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/Footer' // <- OJO: F mayúscula

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>VoltGo</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Contenido principal */}
        <main className="flex-1">
          <Component {...pageProps} />
        </main>

        {/* Footer en TODAS las páginas */}
        <Footer />
      </div>
    </>
  )
}
