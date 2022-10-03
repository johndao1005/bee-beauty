import React,{ useEffect,createContext } from "react";
import { fetchAPI, getStrapiMedia } from "../api/strapi_api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import App from "next/app";
import Head from "next/head";

export const GlobalContent = createContext()

function MyApp({ Component, pageProps }) {
  const { global } = pageProps

  // loading from bootstrap due to rendering work
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  console.log(global.attributes)
  return (<>
    <Head>
      <link rel="icon" href={getStrapiMedia(global.attributes.favicon)} />
      <title>{global.attributes.siteName}</title>
    </Head>
    <GlobalContent.Provider value={global.attributes}>
      <Component {...pageProps} />
    </GlobalContent.Provider>
  </>)
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};


export default MyApp
