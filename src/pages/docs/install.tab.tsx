import { Code, TabPane } from "../../components";

export const InstallTab = () => (
  <TabPane tabName="install">
    <h3>Install</h3>
    <h4>You can install using npm:</h4>
    <Code lang="bash" code={`npm install nest-mongo-auth`} />
    <h4>or yarn:</h4>
    <Code lang="bash" code={`yarn add nest-mongo-auth`} />
  </TabPane>
);
