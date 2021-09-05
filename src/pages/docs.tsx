import React from "react";
import { Col, ListGroup, Row, Tab } from "react-bootstrap";
import { useHistory } from "react-router";
import { MainWrapper } from "../components/MainWrapper";
import { MenuItem } from "../components/MenuItem";
import { AuthModuleTab } from "./docs/auth-module.tab";
import { AuthServiceAuthTab } from "./docs/auth-service-auth.tab";
import { AuthServiceLoginTab } from "./docs/auth-service-login.tab";
import { AuthServiceRegisterTab } from "./docs/auth-service-register.tab";
import { GetStartedTab } from "./docs/get-started.tab";
import { InstallTab } from "./docs/install.tab";
import { JwtModuleTab } from "./docs/jwt-module.tab";

const DocsPage: React.FC = () => {
  const { location } = useHistory();
  const defaultActiveKey = location.pathname
    ? "#" + location.pathname
    : "#docs/install";
  return (
    <MainWrapper>
      <Tab.Container id="docs-menu" defaultActiveKey={defaultActiveKey}>
        <Row>
          <Col sm={3}>
            <ListGroup variant="flush">
              <MenuItem
                pathName={defaultActiveKey}
                tabName="get-started"
                name="Get started"
              />
              <MenuItem
                pathName={defaultActiveKey}
                tabName="install"
                name="Install"
              />
              <MenuItem
                pathName={defaultActiveKey}
                tabName="jwt-module"
                name="Jwt Module"
              />
              <MenuItem
                pathName={defaultActiveKey}
                tabName="auth-module"
                name="Auth Module"
              />
              <MenuItem
                pathName={defaultActiveKey}
                tabName="auth-service-login"
                name="Auth Service - login"
              />
              <MenuItem
                pathName={defaultActiveKey}
                tabName="auth-service-auth"
                name="Auth Service - auth"
              />
              <MenuItem
                pathName={defaultActiveKey}
                tabName="auth-service-register"
                name="Auth Service - register"
              />
            </ListGroup>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <InstallTab />
              <GetStartedTab />
              <AuthModuleTab />
              <AuthServiceLoginTab />
              <AuthServiceAuthTab />
              <AuthServiceRegisterTab />
              <JwtModuleTab />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </MainWrapper>
  );
};

export default DocsPage;
