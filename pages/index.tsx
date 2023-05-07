import type { NextPage } from "next";
import Head from "next/head";
import AgIntro from "../components/agIntro";
import AgTitle from "../components/agTitle";
import Erase from "../components/erase";

const Home: NextPage = () => {
  return (
    <div className="bg-[#524630] text-white">
      {" "}
      {/* bg-slate-900 */}
      <Head>
        <title>Adgallery-app</title>
        <meta name="description" content="CZAR+ Adgallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Erase /> */}
      <AgIntro />
      {/*<h1 className="text-3xl font-bold underline">Hello world!</h1>*/}
    </div>
  );
};

export default Home;
