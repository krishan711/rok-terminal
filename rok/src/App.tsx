import React from 'react';
import { Row, Col } from 'antd';

import 'antd/dist/antd.css';
import SideBar from './sidebar';
import { Layout, Menu } from 'antd'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col span={12}>{SideBar()}</Col>
          <Col span={12}>Welcome to rok terminal</Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
