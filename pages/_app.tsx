// pages/_app.tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

// 👇 importa tu barra superior / navegación
import Navbar from '../components/Navbar'        // si tu archivo se llama distinto, ajusta el nombre
import Footer from '../components/Footer'        // OJO: mayúscula/minúscula debe coincidir con el archivo

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>VoltGo</title>
      </Head>

      {/* layout de toda la app */}
      <div className="min-h-screen flex flex-col">
        {/* 🔹 vuelve a colocar la barra superior con logo/menú/botón */}
        <Navbar />

        {/* contenido de cada página */}
        <main className="flex-1">
          <Component {...pageProps} />
        </main>

        {/* pie de página corporativo */}
        <Footer />
      </div>
    </>
  )
}
