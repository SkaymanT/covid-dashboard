import { Row, Col } from 'antd';
import * as React from 'react';

import './app.scss';
import Footer from '../footer';
import GameContainer from '../game-container';
import GameMenu from '../game-menu';

const App: React.FC = () => (
  <React.Fragment>
    <Row>
      <Col flex="1 1 200px">
        <GameMenu />
      </Col>
      <Col flex="1 1 620px">
        <GameContainer />
      </Col>
    </Row>
    <Footer />
  </React.Fragment>
);

export default App;
