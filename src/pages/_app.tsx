import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hypehire - NextJS - TailwindCSS</title>
        <meta
          name="description"
          content="Slice design with NextJS and TailwindCSS"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
