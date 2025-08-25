// pages/_app.tsx
import type { AppProps } from "next/app";
import NavBar from "../components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}
