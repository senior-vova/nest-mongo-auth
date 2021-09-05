import React from "react";
import { ListGroup } from "react-bootstrap";

type Props = {
  tabName: string;
  name: string;
  pathName: string;
};

export const MenuItem: React.FC<Props> = (props: Props) => (
  <ListGroup.Item
    className="py-3"
    variant="secondary"
    action
    active={props.pathName === `#docs/${props.tabName}`}
    href={`#docs/${props.tabName}`}
  >
    <h5>{props.name}</h5>
  </ListGroup.Item>
);
