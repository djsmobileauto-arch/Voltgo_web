import type { AppProps } from "next/app";
import NavBar from "../components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      {/* Deja espacio bajo el header fijo */}
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}
