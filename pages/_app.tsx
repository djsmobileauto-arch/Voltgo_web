import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenido principal */}
      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      {/* Footer en TODAS las páginas */}
      <Footer />
    </div>
  )
}
