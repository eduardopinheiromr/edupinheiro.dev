import dynamic from "next/dynamic";
import { useRouter } from "next/router";

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

type Props = {
  language?: string;
  snippet: string;
};

export default function DynamicCodeBlock({ language, snippet }: Props) {
  const router = useRouter();

  return <CustomCodeBlock {...{ language, snippet }} />;
}
