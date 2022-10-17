import { Heading, Link, UnorderedList } from "@chakra-ui/react";
import ContentLayout from "@modules/about/components/ContentLayout";

export const coreWebVitals: Content = {
  render: () => {
    const coreWebVitalsMetrics = [
      {
        name: "Largest Contentful Paint (LCP)",
        description: "Tempo de carregamento da página",
      },
      {
        name: "First Input Delay (FID)",
        description: "Tempo de interação com a página",
      },
      {
        name: "Cumulative Layout Shift (CLS)",
        description: "Estabilidade da página",
      },
    ];
    return (
      <ContentLayout title="Core Web Vitals - as principais métricas da web">
        Recentemente, o Google anunciou que a partir de maio de 2021, o
        algoritmo de busca do Google passará a levar em consideração as métricas
        de performance de uma página web, chamadas de{" "}
        <strong>Core Web Vitals</strong>. Essas métricas são:
        <br />
        <br />
        <UnorderedList>
          {coreWebVitalsMetrics.map(({ name, description }) => (
            <li key={name}>
              <strong>{name}</strong>: {description}
            </li>
          ))}
        </UnorderedList>
        <br />
        <Heading as="span" color="green">
          Framework: Next.js
        </Heading>
        <br />
        <br />
        Sempre que possível, opto pelo uso do framework Next.js para construir
        meus projetos. O Next.js é um framework que utiliza o React.js para
        construir aplicações modernas na web, e que possui diversas
        funcionalidades que facilitam o desenvolvimento, como SSR (Server Side
        Rendering), SSG (Static Site Generation), entre outras.
        <br />
        <br />
        <Heading as="span" color="green">
          Otimização de imagens e vídeos
        </Heading>
        <br />
        <br />
        Sempre utilizo os formatos de imagens mais adequados para cada situação,
        como <strong>WebP</strong> e <strong>AVIF</strong>, que são formatos
        mais modernos e que oferecem melhor qualidade e menor tamanho de
        arquivo. O lazy loading também é uma ótima opção para otimizar o
        carregamento.
        <br />
        <br />
        Para a otimização de imagens, utilizo o Next.js Image, que é uma
        funcionalidade nativa do framework, ou o ImageKit, que é uma ferramenta
        que oferece diversas funcionalidades para otimização de imagens, como
        redimensionamento, compressão, entre outras.
        <br />
        <br />
        <Heading as="span" color="green">
          Fontes
        </Heading>
        <br />
        <br /> Utilizo libs como o fontsource para carregar as fontes de forma
        mais performática, ou o Google Fonts, que é uma fonte de fontes
        gratuitas hospedadas pelo Google.
        <br />
        <br />
        <Heading as="span" color="green">
          Layout Shifting
        </Heading>
        <br />
        <br />
        Para evitar o layout shifting, há muitas técnicas que podem ser
        utilizadas, como o uso de placeholders, Skeletons, que são animações de
        carregamento, o recente React Suspense, entre outras que são ótimas
        opções.
        <br />
        <br />
        <br />
        <br />
        Para saber mais sobre as Core Web Vitals, acesse o link{" "}
        <Link
          color="blue"
          target="_blank"
          rel="noopener noreferrer"
          href="https://web.dev/vitals/"
        >
          web.dev/vitals
        </Link>
        .
      </ContentLayout>
    );
  },
};
