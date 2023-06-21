import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import Head from "next/head";

const inter = Lato({
  subsets: ["latin-ext"],
  weight: ["700", "900", "100", "300", "400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tattoo</title>
        <meta
          name="description"
          content="Serviços jurídicos em Direito Imobiliário, Previdenciário, Cível, Empresarial, Tributário, Família e Sucessões. Soluções em Direito Patrimonial. Inventários. Advogados."
          key="desc"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        meta
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
