import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd'

import SideBar from './sidebar';



const LIST_OF_COMMANDS = [
  'moo',
  'baa',
  'oink',
  'moo baa oink this is a really long command i type all day every day',
];


const App = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = React.useState<boolean>(true);

  const [recentCommands, setRecentCommands] = React.useState<string[]>(LIST_OF_COMMANDS);
  const [recentCommandClicked, setRecentCommandClicked] = React.useState<string>();  // TODO(rikhil): pass the recent command clicked to the terminal prompt

  const toggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  const onRecentCommandSelected = (recentCommand: string): void => {
    console.log('in App. ' + recentCommand)
    setRecentCommandClicked(recentCommand);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Layout style={{ minHeight: '100vh' }}>
          <Layout.Sider collapsed={false} onCollapse={toggleMenu}>
            <SideBar recentCommands={recentCommands} setRecentCommands={setRecentCommands} onRecentCommandSelected={onRecentCommandSelected} />
          </Layout.Sider>
          <Layout className="site-layout">
            <Layout.Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                Welcome to rok terminal
              </div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>©2020 Created by team rok</Layout.Footer>
          </Layout>
        </Layout>
      </header>
    </div>
  );
}

export default App;
