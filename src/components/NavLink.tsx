import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

type Props = {
  href: string;
  name: string;
  isBlank: boolean;
};

export const NavLinkComponent: React.FC<Props> = (props: Props) => (
  <>
    <Nav.Item>
      {props.isBlank ? (
        <Nav.Link className="mx-2" target="_blank" href={props.href}>
          <h4>{props.name}</h4>
        </Nav.Link>
      ) : (
        <NavLink
          className="nav-link mx-2"
          activeClassName="active"
          to={props.href}
        >
          <h4>{props.name}</h4>
        </NavLink>
      )}
    </Nav.Item>
  </>
);
