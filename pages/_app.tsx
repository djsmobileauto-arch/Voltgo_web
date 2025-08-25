import type { AppProps } from "next/app";
import NavBar from "../components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      {/* espacio exacto bajo el header fijo y mismo fondo azul para que NO quede franja */}
      <main className="pt-14 bg-[var(--volt-blue)]">
        <Component {...pageProps} />
      </main>
    </>
  );
}
