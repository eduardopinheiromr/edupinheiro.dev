import { Footer, Header } from "@components";
import { ReactNode } from "react";
import Head from "next/head";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Eduardo Pinheiro | Desenvolvedor Fullstack</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
