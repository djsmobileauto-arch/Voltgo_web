import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";   // ruta relativa
import "../styles/globals.css";              // ruta relativa

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* espacio para que el navbar fijo no tape el contenido */}
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}
