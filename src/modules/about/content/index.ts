import { bio } from "./bio";
import { apiConsumeOnFront } from "./habilidades/apiConsumeOnFront";
import { apiDevelopment } from "./habilidades/apiDevelopment";
import { multithreadingNode } from "./habilidades/multithreadingNode";
import { globalStateManager } from "./habilidades/globalStateManager";
import { chakraTradeoff } from "./habilidades/chakraTradeoff";
import { projectStructure } from "./habilidades/projectStructure";
import { seoMetatags } from "./habilidades/seoMetatags";
import { coreWebVitals } from "./habilidades/coreWebVitals";
import { experiencia } from "./experiencia";

export const content = {
  bio,
  "desenvolvimento-de-APIs": apiDevelopment,
  "consumo-de-APIs-no-front": apiConsumeOnFront,
  "node-com-multithreading": multithreadingNode,
  "gerenciador-de-estado-global": globalStateManager,
  "chakra-ui-e-seu-tradeoff": chakraTradeoff,
  "como-estruturo-meus-projetos": projectStructure,
  "metatags-de-SEO": seoMetatags,
  "Core-Web-Vitals": coreWebVitals,
  experiência: experiencia,
};
