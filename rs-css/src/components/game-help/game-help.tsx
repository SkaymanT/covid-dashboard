import { Divider, Typography } from 'antd';
import React from 'react';

import './game-help.scss';

type Props = {
  menu: IMenu;
};

const GameHelp: React.FC<Props> = ({ menu }) => {
  const { Title, Text } = Typography;
  let i = 0;
  return (
    <div className="menu-help">
      <Title level={4}>{menu.name}</Title>
      <Text>{menu.title}</Text>
      <Title level={3} code>
        {menu.syntax}
      </Title>
      <Text>
        {menu.hint.textOne}
        {menu.hint.selectorOne !== '' ? (
          <Text code>{menu.hint.selectorOne}</Text>
        ) : (
          menu.hint.selectorOne
        )}
        {menu.hint.textTwo}
        {menu.hint.selectorTwo !== '' ? (
          <Text code>{menu.hint.selectorTwo}</Text>
        ) : (
          menu.hint.selectorTwo
        )}
        {menu.hint.textThree}
        {menu.hint.selectorThree !== '' ? (
          <Text code>{menu.hint.selectorThree}</Text>
        ) : (
          menu.hint.selectorThree
        )}
        {menu.hint.textFour}
        {menu.hint.selectorFour !== '' ? (
          <Text code>{menu.hint.selectorFour}</Text>
        ) : (
          menu.hint.selectorFour
        )}
        {menu.hint.textFive}
        {menu.hint.selectorFive !== '' ? (
          <Text code>{menu.hint.selectorFive}</Text>
        ) : (
          menu.hint.selectorFive
        )}
      </Text>
      <Divider dashed />
      {menu.examples.length !== 0 ? <Title level={4}>Examples</Title> : ''}

      {menu.examples.map(item => {
        i += 1;
        return (
          <div className="example" key={`${i}`}>
            <Text key={`${i}`}>
              {item.textOne}
              {item.selectorOne !== '' ? <Text code>{item.selectorOne}</Text> : item.selectorOne}
              {item.textTwo}
              {item.selectorTwo !== '' ? <Text code>{item.selectorTwo}</Text> : item.selectorTwo}
              {item.textThree}
              {item.selectorThree !== '' ? (
                <Text code>{item.selectorThree}</Text>
              ) : (
                item.selectorThree
              )}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

export default GameHelp;
