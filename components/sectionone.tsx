import Head from "next/head";
import Image from "next/image";
import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const Sectionone: NextComponentType<NextPageContext, {}, Props> = (props: Props,) => {
  return (
    <div>
      <Head>
        <title>Section One</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Section One</h1>
      </div>

    </div>
  )
}

export default Sectionone