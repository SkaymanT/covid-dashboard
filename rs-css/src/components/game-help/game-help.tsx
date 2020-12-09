import React from 'react';
import { Divider, Typography } from 'antd';

import './game-help.scss';

type Props = {
  menu: IMenu;
};

export const GameHelp: React.FC<Props> = ({ menu }) => {
  const { Title, Text } = Typography;
  return (
    <div className="menu-help">
      <Title level={4}>{menu.name}</Title>
      <Text>{menu.title}</Text>
      <Title level={3} code={true}>
        {menu.syntax}
      </Title>
      <Text>
        {menu.hint.textOne}
        {menu.hint.selectorOne !== '' ? (
          <Text code={true}>{menu.hint.selectorOne}</Text>
        ) : (
            menu.hint.selectorOne
          )}
        {menu.hint.textTwo}
        {menu.hint.selectorTwo !== '' ? (
          <Text code={true}>{menu.hint.selectorTwo}</Text>
        ) : (
            menu.hint.selectorTwo
          )}
        {menu.hint.textThree}
        {menu.hint.selectorThree !== '' ? (
          <Text code={true}>{menu.hint.selectorThree}</Text>
        ) : (
            menu.hint.selectorThree
          )}
        {menu.hint.textFour}
        {menu.hint.selectorFour !== '' ? (
          <Text code={true}>{menu.hint.selectorFour}</Text>
        ) : (
            menu.hint.selectorFour
          )}
        {menu.hint.textFive}
        {menu.hint.selectorFive !== '' ? (
          <Text code={true}>{menu.hint.selectorFive}</Text>
        ) : (
            menu.hint.selectorFive
          )}
      </Text>
      <Divider dashed />
      {
        menu.examples.length !== 0 ? <Title level={4}>Examples</Title> : ''
      }

      {menu.examples.map((item, index) => {
        return (
          <div className="example" key={index}>
            <Text key={index}>
              {item.textOne}
              {item.selectorOne !== '' ? (
                <Text code={true}>{item.selectorOne}</Text>
              ) : (
                  item.selectorOne
                )}
              {item.textTwo}
              {item.selectorTwo !== '' ? (
                <Text code={true}>{item.selectorTwo}</Text>
              ) : (
                  item.selectorTwo
                )}
              {item.textThree}
              {item.selectorThree !== '' ? (
                <Text code={true}>{item.selectorThree}</Text>
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
