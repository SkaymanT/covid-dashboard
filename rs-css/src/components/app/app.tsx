import * as React from 'react';
import { Row, Col } from 'antd';

import './app.scss';
import GameContainer from '../game-container';
import GameMenu from '../game-menu';
import Footer from '../footer';

const App: React.FC = () => {
  return (
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
};

export default App;
