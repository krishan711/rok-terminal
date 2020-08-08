import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd'

import SideBar from './sidebar';


const { Content, Footer, Sider } = Layout;


const App = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = React.useState<boolean>(true);
  const [, setRecentCommandClicked] = React.useState<string>();  // TODO(rikhil): pass the recent command clicked to the terminal prompt

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
          <Sider collapsible collapsed={isMenuCollapsed} onCollapse={toggleMenu}>
            <SideBar
              onRecentCommandSelected={onRecentCommandSelected}
            />
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                Welcome to rok terminal
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2020 Created by team rok</Footer>
          </Layout>
        </Layout>

      </header>
    </div>
  );
}

export default App;
