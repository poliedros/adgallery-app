import type { NextPage } from "next";
import Head from "next/head";
import AgIntro from "../components/agIntro";
import AgTitle from "../components/agTitle";
import Erase from "../components/erase";
import Script from "next/script";

const GA_TRACKING_ID = "G-Z27Y9XMDSZ";

const Home: NextPage = () => {
  return (
    <div className="bg-[#863F43] text-white">
      {" "}
      {/*#524630*/}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
          `}
      </Script>{" "}
      {/* bg-slate-900 */}
      <Head>
        <title>Jornal Opção</title>
        <meta name="description" content="CZAR+ Opção" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Erase /> */}
      <AgIntro />
      {/*<h1 className="text-3xl font-bold underline">Hello world!</h1>*/}
    </div>
  );
};

export default Home;
