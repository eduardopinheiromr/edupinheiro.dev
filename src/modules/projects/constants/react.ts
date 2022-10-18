import izaInstitutional from "@assets/images/react/iza-institucional.png";
import izaBackoffice from "@assets/images/react/iza-backoffice.png";
import izaPortal from "@assets/images/react/iza-portal.png";
import developerPortifolio from "@assets/images/react/developer-portifolio.png";
import teleCentral from "@assets/images/next.jpeg";
import whatsappCentral from "@assets/images/react/chat-whatsapp.png";
import dataGenerator from "@assets/images/react/gerador-de-dados.png";
import leiturinha from "@assets/images/react/loja-leiturinha.png";
import crComercio from "@assets/images/react/cr-tecnologias.png";
import imobiPlaces from "@assets/images/react/imobi-places.png";
import kpnSafety from "@assets/images/react/kpn-safety.png";
import bemMeVi from "@assets/images/react/bem-me-vi.png";

export const reactProjects: Project[] = [
  {
    name: "IZA Seguros - Institucional",
    description:
      "Site institucional que construí do zero para a IZA Seguros. Possui um complexo fluxo de aquisição como SPA e páginas geradas estaticamente, consumindo um CMS Headless.",
    links: [{ name: "site online", href: "https://iza.com.vc/" }],
    image: izaInstitutional,
    imageString: "/images/react/iza-institucional.png",
    technologies: [
      "typescript",
      "nextjs",
      "react",
      "react-hook-forms",
      "react-input-mask",
      "chakra-ui",
      "zustand",
      "yup",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "IZA Seguros - Backoffice",
    description:
      "Dashboard que construí do zero para a IZA Seguros. Possui múltiplos módulos importantes de gerenciamento da empresa, vital para seu funcionamento.",
    links: [],
    image: izaBackoffice,
    imageString: "/images/react/iza-backoffice.png",
    technologies: [
      "typescript",
      "nextjs",
      "react",
      "react-hook-forms",
      "react-input-mask",
      "chakra-ui",
      "zustand",
      "yup",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "IZA Seguros - Portal B2B",
    description:
      "Dashboard que construí do zero para a IZA Seguros. Utilizada por seus clientes B2B para gerenciar segurados e adicionar em massa.",
    links: [{ name: "site online", href: "https://portal.iza.com.vc/" }],
    image: izaPortal,
    imageString: "/images/react/iza-portal.png",
    technologies: [
      "typescript",
      "nextjs",
      "react",
      "react-hook-forms",
      "react-input-mask",
      "chakra-ui",
      "zustand",
      "yup",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "Developer Portifolio",
    description:
      "Site portifolio com meus contatos, que criei para mostrar meus projetos e tecnologias que estou estudando.",
    links: [
      {
        name: "github",
        href: "https://github.com/eduardopinheiromr/edupinheiro.dev",
      },
      { name: "site online", href: "https://edupinheiro.dev/" },
    ],
    image: developerPortifolio,
    imageString: "/images/react/developer-portifolio.png",
    technologies: [
      "react",
      "typescript",
      "chakra-ui",
      "nextjs",
      "node-mailjet",
      "react-hook-forms",
      "zustand",
      "yup",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "Central Teleatendimento",
    description:
      "Front end que criei para meu projeto fullstack de Teleatendimento, com agendamento e chamadas de vídeo.",
    links: [
      {
        name: "github",
        href: "https://github.com/eduardopinheiromr/socket-server",
      },
    ],
    image: teleCentral,
    imageString: "/images/next.jpeg",
    technologies: [
      "react",
      "typescript",
      "chakra-ui",
      "nextjs",
      "socket.io-client",
      "react-calendar",
      "react-datepicker",
      "react-select",
      "react-hook-forms",
      "react-input-mask",
      "zustand",
      "yup",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "Central Whatsapp",
    description:
      "Front end que criei para meu projeto fullstack 'Central de Atendimento com Whatsapp', utilizando o Twilio como gateway.",
    links: [
      {
        name: "github",
        href: "https://github.com/eduardopinheiromr/chat-whatsapp-front",
      },
    ],
    image: whatsappCentral,
    imageString: "/images/react/chat-whatsapp.png",
    technologies: [
      "react",
      "typescript",
      "chakra-ui",
      "nextjs",
      "socket.io-client",
      "react-select",
      "react-tiny-virtual-list",
      "react-select",
      "react-hook-forms",
      "react-input-mask",
      "zustand",
      "yup",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "Gerador de Dados",
    description:
      "Extensão para o Chrome que criei para gerar dados aleatórios para facilitar testes de formulários.",
    links: [
      {
        name: "github",
        href: "https://github.com/eduardopinheiromr/extensao-chrome-gerador-de-dados",
      },
      {
        name: "chrome webstore",
        href: "https://chrome.google.com/webstore/detail/gerador-de-dados/danfhkefkmhccgdacmdgopjpadedfgll",
      },
    ],
    image: dataGenerator,
    imageString: "/images/react/gerador-de-dados.png",
    technologies: ["react", "typescript", "eslint", "prettier"],
  },
  {
    name: "Loja Leiturinha",
    description:
      "Ecommerce de livros e produtos infantis, que construí do zero quando trabalhava na empresa Playkids.",
    links: [{ name: "site online", href: "https://loja.leiturinha.com.br/" }],
    image: leiturinha,
    imageString: "/images/react/loja-leiturinha.png",
    technologies: [
      "react",
      "typescript",
      "tailwindcss",
      "twin macro",
      "styled components",
      "redux",
      "nextjs",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "CR Comércio",
    description:
      "Site institucional que criei tanto o protótipo quanto o código, conectado ao CMS CosmicJS, para uma empresa de comércio offshore, que me contratou como freelancer.",
    links: [{ name: "site online", href: "https://www.crtecnologias.com.br/" }],
    image: crComercio,
    imageString: "/images/react/cr-tecnologias.png",
    technologies: [
      "preact",
      "typescript",
      "react-bootstrap",
      "lottie",
      "nextjs",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "Imobi Places",
    description:
      "Plataforma de busca, gerenciamento e cadastro de imóveis, que ajudei a construir quando trabalhei na Imobi.",
    links: [{ name: "site online", href: "https://imobiplaces.com.br/" }],
    image: imobiPlaces,
    imageString: "/images/react/imobi-places.png",
    technologies: [
      "react",
      "typescript",
      "material-ui",
      "react-select",
      "nextjs",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "KPN Safety",
    description:
      "Site institucional que criei tanto o protótipo quanto o código, conectado ao CMS CosmicJS, para uma empresa de equipamentos de proteção individual, que me contratou como freelancer.",
    links: [
      { name: "demo online", href: "https://kpn-safety-inky.vercel.app/" },
    ],
    image: kpnSafety,
    imageString: "/images/react/kpn-safety.png",
    technologies: [
      "react",
      "typescript",
      "bootstrap",
      "preact",
      "react-slick",
      "cosmic.js",
      "nextjs",
      "eslint",
      "prettier",
    ],
  },
  {
    name: "Bem Me Vi",
    description:
      "Site institucional da ONG que ajuda jovens artistas da periferia a se desenvolverem e valorizar seu papel de cultura no País.",
    links: [
      {
        name: "github",
        href: "https://github.com/eduardopinheiromr/bem-me-vi",
      },
      { name: "site online", href: "https://www.bemmevi.com.br/" },
    ],
    image: bemMeVi,
    imageString: "/images/react/bem-me-vi.png",
    technologies: [
      "react",
      "typescript",
      "bootstrap",
      "nextjs",
      "eslint",
      "prettier",
    ],
  },
];
