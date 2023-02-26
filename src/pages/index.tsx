import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  const router = useRouter();


  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-br from-rose-500 to-purple-600">
        Test BG
      </div>

    </>
  );
};

export default Home;
