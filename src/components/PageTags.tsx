import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  image?: string;
};

export const PageTags = ({ title, description, image }: Props) => {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        name="author"
        content="Eduardo Pinheiro - https://edupinheiro.dev/"
      />
      <meta property="og:url" content={url + router.asPath} />
      <meta
        property="og:image"
        content={image ? image : url + "/assets/images/logo-vector.png"}
      />
      <meta property="og:site_name" content={siteName} />
      {/* TODO: Descobrir o que é e qual o código utilizar no content do fb:admins */}
      {/* <meta property="fb:admins" content="" /> */}
      <link rel="canonical" href={url + router.asPath} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
