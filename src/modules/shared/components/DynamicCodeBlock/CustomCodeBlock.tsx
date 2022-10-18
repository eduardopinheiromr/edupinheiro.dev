import { CopyBlock, dracula } from "react-code-blocks";

export default function CustomCodeBlock({ language, snippet }) {
  return (
    <CopyBlock
      codeBlock
      language={language ?? "jsx"}
      text={snippet}
      theme={dracula}
      showLineNumbers
    />
  );
}
