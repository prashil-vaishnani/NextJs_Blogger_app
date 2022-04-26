import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="container border">
        <Head>
          <title>Blogger</title>
        </Head>
        <p className="p-1 text-center">Welcome to the blogger app</p>
        <Image src="/vercel.svg" alt="Vercel Logo" width={200} height={200} />
      </div>
    </>
  );
};

export default Home;
