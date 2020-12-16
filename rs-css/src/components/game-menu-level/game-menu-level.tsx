import { MenuFoldOutlined, CheckOutlined, CheckCircleOutlined } from '@ant-design/icons';
import {
  Drawer, Button, Slider, InputNumber, Typography, Space, Tooltip,
} from 'antd';
import React, { Fragment, useState } from 'react';

import './game-menu-level.scss';

type Props = {
  games: IGame[];
  currentLevel: number;
  changeGameLevel: (newLevel: number) => void;
  resetGameLevel: () => void;
};

const GameMenuLevel: React.FC<Props> = ({
  games,
  currentLevel,
  changeGameLevel,
  resetGameLevel,
}) => {
  const { Title } = Typography;

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onClickLevel = (value: number) => {
    changeGameLevel(value);
    onClose();
  };

  const onClickReset = () => {
    resetGameLevel();
    onClose();
  };

  const onChange = (value: number) => {
    if (typeof value === 'number' && value < games.length + 1) {
      changeGameLevel(value);
    }
  };

  const check = (
    <Fragment>
      {games[currentLevel - 1].menu.ishelp && games[currentLevel - 1].menu.checked ? (
        <Tooltip placement="top" title="solved with Help">
          <CheckCircleOutlined
            style={{
              fontSize: '24px',
              color:
                games.length > 0 && games[currentLevel - 1].menu.checked ? '#52c41a' : '#606060',
            }}
          />
        </Tooltip>
      ) : (
        <Tooltip placement="top" title="solved without Help">
          <CheckOutlined
            style={{
              fontSize: '24px',
              color:
                games.length > 0 && games[currentLevel - 1].menu.checked ? '#52c41a' : '#606060',
            }}
          />
        </Tooltip>
      )}
      <Title level={4} style={{ margin: '0px' }}>
        Level
      </Title>
    </Fragment>
  );

  const levels = (
    <Fragment>
      {games.map((item, index) => {
        const classes = index === currentLevel - 1 ? ['level', 'current'] : ['level'];
        return (
          <button
            className={classes.join(' ')}
            key={item.menu.id}
            onClick={() => onClickLevel(+item.menu.id)}
            type="button"
          >
            <Space size="large">
              {item.menu.ishelp && item.menu.checked ? (
                <Tooltip placement="top" title="solved with Help">
                  <CheckCircleOutlined
                    style={{
                      fontSize: '24px',
                      color: item.menu.checked ? '#52c41a' : '#606060',
                    }}
                  />
                </Tooltip>
              ) : (
                <Tooltip placement="top" title="solved without Help">
                  <CheckOutlined
                    style={{
                      fontSize: '24px',
                      color: item.menu.checked ? '#52c41a' : '#606060',
                    }}
                  />
                </Tooltip>
              )}
              <Title level={5} style={{ margin: '0px' }}>
                {item !== undefined ? `${item.menu.id}   ${item.menu.syntax}` : ' '}
              </Title>
            </Space>
          </button>
        );
      })}
      <Button type="primary" block onClick={() => onClickReset()}>
        Reset Progress
      </Button>
    </Fragment>
  );
  return (
    <Fragment>
      <div className="menu-info">
        <Button type="primary" onClick={showDrawer}>
          <MenuFoldOutlined />
        </Button>
        <Drawer
          title="Choose a level"
          placement="left"
          width={320}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          {levels}
        </Drawer>
        <div className="menu-text">{check}</div>
        <InputNumber
          min={1}
          max={games.length}
          width={100}
          style={{ margin: '0px' }}
          value={currentLevel}
          onChange={onChange}
        />
      </div>
      <div className="menu-progress">
        <Slider
          min={1}
          max={games.length}
          onChange={onChange}
          value={typeof currentLevel === 'number' ? currentLevel : 0}
        />
      </div>
    </Fragment>
  );
};

export default GameMenuLevel;
