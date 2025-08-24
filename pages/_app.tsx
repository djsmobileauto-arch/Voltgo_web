import type { AppProps } from "next/app";
// Si tu alias "@" está configurado en tsconfig.json, usa esta línea:
import Navbar from "@/components/Navbar";
// Si NO tienes alias "@", usa en cambio:
// import Navbar from "../components/Navbar";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* padding-top para que el contenido no quede debajo del navbar fijo */}
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}
