/* eslint-disable react/jsx-props-no-spreading */
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

import { CredentialContext } from "../lib/contexts";

import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "lib/components/Chakra";
import Fonts from "lib/components/Fonts";
import Layout from "lib/layout";
import "lib/styles/globals.css";
import { useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [credential, setCredential] = useState({email:"", password: ""});

  return (
    <CredentialContext.Provider value={{credential, setCredential}}> 
      <Chakra>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <Fonts />
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Chakra>
    </CredentialContext.Provider>
  );
};

export default MyApp;
