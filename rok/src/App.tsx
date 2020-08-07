import React from 'react';
import { Row, Col } from 'antd';

import SideBar from './sidebar';


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
