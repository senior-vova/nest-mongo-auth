import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  code: string;
  lang: string;
};

export const Code: React.FC<Props> = ({ code, lang }) => (
  <SyntaxHighlighter
    customStyle={{ width: "75%", marginLeft: 50, fontSize: 16 }}
    language={lang}
    style={theme}
  >
    {code}
  </SyntaxHighlighter>
);
