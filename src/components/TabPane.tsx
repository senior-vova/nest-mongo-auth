import React from "react";
import { Tab } from "react-bootstrap";

type Props = {
  tabName: string;
  children: any;
};

export const TabPane: React.FC<Props> = (props: Props) => (
  <Tab.Pane className="py-3" eventKey={`#docs/${props.tabName}`}>
    {props.children}
  </Tab.Pane>
);
