import Head from "next/head";
import HomeHero from "../components/HomeHero";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>VoltGo – Mobile EV Charging & Roadside Assistance</title>
        <meta
          name="description"
          content="Fast, safe and reliable mobile EV charging and roadside assistance. Serving Connecticut 24/7."
        />
        <meta property="og:title" content="VoltGo – Mobile EV Charging" />
        <meta
          property="og:description"
          content="Fast, safe and reliable EV charging wherever you need it."
        />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHero />
      <ServicesSection />
    </>
  );
}
