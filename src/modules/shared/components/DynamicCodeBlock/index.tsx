import dynamic from "next/dynamic";

const CustomCodeBlock = dynamic(import("./CustomCodeBlock"), {
  loading: () => (
    <div
      style={{
        display: "flex",
        background: "#010C15",
        animation: "pulse 1.5s infinite",
        minHeight: "300px",
        minWidth: "100%",
      }}
    />
  ),
});

export type CodeBlockProps = {
  language?: string;
  snippet: string;
};

export default function DynamicCodeBlock({
  language,
  snippet,
}: CodeBlockProps) {
  return <CustomCodeBlock {...{ language, snippet }} />;
}
