import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Header";

type Props = {
  children: any;
};

export const MainWrapper: React.FC<Props> = (props: Props) => {
  return (
    <div className="bg-dark text-light">
      <Container className="min-vh-100">
        <Header />
        {props.children}
      </Container>
    </div>
  );
};
