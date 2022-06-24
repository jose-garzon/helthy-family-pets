import type { NextPage } from "next";
import Head from "next/head";
import { LogoHeader } from "../components/organisms/Header";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pets | Login</title>
      </Head>
      <main>
        <LogoHeader />
      </main>
    </>
  );
};

export default Login;
