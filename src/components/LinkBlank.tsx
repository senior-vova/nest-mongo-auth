import React from "react";

type Props = {
  text: string;
  link: string;
};

export const LinkBlank: React.FC<Props> = ({ text, link }) => (
  <a rel="noreferrer" target="_blank" href={link}>
    {text}
  </a>
);
