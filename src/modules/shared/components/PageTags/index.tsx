import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  image?: string;
};

const PageTags = ({ title, description, image }: Props) => {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="robots" content="follow, index" />
      <meta
        name="author"
        content="Eduardo Pinheiro - https://edupinheiro.dev/"
      />
      <meta
        name="description"
        content={
          description ||
          "Desenvolvedor JavaScript/Typescript, Fullstack. Site com informações sobre mim, portifólio e contatos."
        }
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url + router.asPath} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          description ||
          "Desenvolvedor JavaScript/Typescript, Fullstack. Site com informações sobre mim, portifólio e contatos."
        }
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url + router.asPath} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={
          description ||
          "Desenvolvedor JavaScript/Typescript, Fullstack. Site com informações sobre mim, portifólio e contatos."
        }
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      <link rel="canonical" href={url + router.asPath} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default PageTags;
