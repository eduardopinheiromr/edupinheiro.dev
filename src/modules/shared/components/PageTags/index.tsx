import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description?: string;
  image?: string;
};

const DEFAULT = {
  color: "#010C15",
  image: "/images/profile.png",
  description:
    "Desenvolvedor JavaScript/Typescript, Fullstack. Site com informações sobre mim, portifólio e contatos.",
};

const PageTags = ({ title, description, image }: Props) => {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_BASE_URL;

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
      <meta name="description" content={description || DEFAULT.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url + router.asPath} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || DEFAULT.description}
      />
      <meta property="og:image" content={image ?? DEFAULT.image} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url + router.asPath} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={description || DEFAULT.description}
      />
      <meta property="twitter:image" content={image ?? DEFAULT.image} />

      <link rel="canonical" href={url + router.asPath} />
      <meta name="msapplication-TileColor" content={DEFAULT.color} />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content={DEFAULT.color} />
    </Head>
  );
};

export default PageTags;
