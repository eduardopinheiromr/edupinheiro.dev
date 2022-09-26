import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import DynamicCodeBlock from "@modules/shared/components/DynamicCodeBlock";

export const multithreadingNode: Content = {
  render: () => {
    const startSnippet = `
    const start = async () => {
      try {
        fastify.listen(
          { port: Number(process.env.PORT) || 3000, host: "0.0.0.0" },
          function (err, address) {
            if (err) {
              fastify.log.error(err);
              process.exit(1);
            }
          }
        );
      } catch (err) {
        fastify.log.error(err);
        process.exit(1);
      }
    };
    `;

    const multithreadingSnippet = `
    if (clusterWorkerSize > 1) {
      if (cluster.isPrimary) {
        for (let i = 0; i < clusterWorkerSize; i++) {
          cluster.fork();
        }
    
        cluster.on("exit", function (worker, code, signal) {
          console.log("Worker", worker.id, "has exited with signal", signal);
          if (code !== 0 && !worker.exitedAfterDisconnect) {
            cluster.fork();
          }
        });
      } else {
        start();
      }
    } else {
      start();
    }
    `;
    return (
      <Stack gap={4} p={4} w="100%">
        <Heading color="blue" animation="pulseOnlyGradient 10s infinite">
          Como escalar APIs Node.js com multithreading
        </Heading>
        <Text>
          Quando se trata de escalar uma API Node.js, a primeira coisa que vem
          na cabeça é utilizar o cluster do Node.js, que é um módulo que permite
          a criação de múltiplos processos, cada um com sua própria instância do
          servidor.
          <br />
          <br />
          Com isso, é possível escalar a API de forma horizontal, ou seja,
          aumentando a quantidade de processos, e consequentemente, a quantidade
          de requisições que a API consegue atender.
          <br />
          <br />
          Em casos de haver processos muito longos como a geração de PDFs,
          processamento de imagens, etc, é mais recomendado utilizar os{" "}
          <strong>worker threads </strong>
          que compartilham o mesmo espaço de memória.
          <br />
          <br />
          Primeiro, vamos alterar o código que inicia o servidor, para que ele
          possa ser chamado dentro do cluster.
          <br />
          <br />
          <Text as="span" color="text">
            # Exemplo com Fastify
          </Text>
          <br />
          <br />
          <DynamicCodeBlock language="typescript" snippet={startSnippet} />
          <br />
          <br />
          Agora, o código que inicia o cluster.
          <br />
          <br />
          <DynamicCodeBlock
            language="typescript"
            snippet={multithreadingSnippet}
          />
        </Text>
      </Stack>
    );
  },
};
