import { Tooltip } from 'antd';
import * as React from 'react';
import './game-table.scss';

type Props = {
  boardMarkup: IBoardMarkup[];
  changeFocus: (value: IBoardMarkup[]) => void;
};

const GameTable: React.FC<Props> = ({ boardMarkup, changeFocus }) => {
  let i = 0;
  const handlerMouseEnter = (indexIn: number, indexElement: number) => {
    changeFocus(
      boardMarkup.map((item, index) => {
        if (indexIn === index) {
          if (indexElement === 0) {
            return { ...item, focus: [true, false, true] };
          }
          if (indexElement === 1) {
            return { ...item, focus: [false, true, false] };
          }
          if (indexElement === 2) {
            return { ...item, focus: [true, false, true] };
          }
        }
        return { ...item, focus: [false, false, false] };
      })
    );
  };

  const handlerMouseLeave = () => {
    changeFocus(boardMarkup.map(item => ({ ...item, focus: [false, false, false] })));
  };
  const createCode = (element: string[]) => {
    if (element[1] !== '' && element[2] !== '') {
      return `${element[0]} class="${element[1]}" id="${element[2]}"`;
    }
    if (element[1] !== '' && element[2] === '') {
      return `${element[0]} class="${element[1]}"`;
    }
    if (element[1] === '' && element[2] !== '') {
      return `${element[0]} id="${element[2]}"`;
    }
    return `${element[0]}`;
  };

  return (
    <div className="game-table">
      {boardMarkup.map((item, index) => {
        i += 1;
        return item.element[1][0] === '' ? (
          <Tooltip
            placement="top"
            title={`<${createCode(item.element[0])}></${item.element[0][0]}>`}
            visible={item.focus[0]}
            key={`${item.element[0][0]}-${i}`}
          >
            <div
              className={
                !item.focus[0]
                  ? `${item.element[0][0]} ${item.element[0][1]}
                ${item.active[0] ? 'certain' : ''}`
                  : `${item.element[0][0]} ${item.element[0][1]}
                ${item.active[0] ? 'certain' : ''} hover-active`
              }
              id={item.element[0][1]}
              key={`${item.element[0][1]}-${i}`}
              onMouseOver={e => {
                e.stopPropagation();
                handlerMouseEnter(index, 0);
              }}
              onMouseOut={() => {
                handlerMouseLeave();
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            />
          </Tooltip>
        ) : (
          <Tooltip
            placement="top"
            title={`<${createCode(item.element[0])}></${item.element[0][0]}>`}
            visible={item.focus[0]}
            key={`${item.element[0][0]}-${i}`}
          >
            <div
              className={
                !item.focus[0]
                  ? `${item.element[0][0]}  ${item.element[0][1]}
                ${item.active[0] ? 'certain' : ''}`
                  : `${item.element[0][0]}  ${item.element[0][1]}
                ${item.active[0] ? 'certain' : ''} hover-active`
              }
              id={item.element[0][0]}
              key={`${item.element[0][0]}-${i}`}
              onMouseOver={e => {
                e.stopPropagation();
                handlerMouseEnter(index, 0);
              }}
              onMouseOut={() => {
                handlerMouseLeave();
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            >
              <Tooltip
                placement="top"
                title={`<${createCode(item.element[1])}></${item.element[1][0]}>`}
                visible={item.focus[1]}
                key={`${item.element[1][0]}-${i}`}
              >
                <div
                  className={
                    !item.focus[1]
                      ? `${item.element[1][0]}  ${item.element[1][1]}
                ${item.active[1] ? 'certain' : ''}`
                      : `${item.element[1][0]}  ${item.element[1][1]}
                ${item.active[1] ? 'certain' : ''} hover-active`
                  }
                  key={`${item.element[1][0]}-${i}`}
                  id={item.element[1][0]}
                  onMouseOver={e => {
                    e.stopPropagation();
                    handlerMouseEnter(index, 1);
                  }}
                  onMouseOut={() => {
                    handlerMouseLeave();
                  }}
                  onFocus={() => {}}
                  onBlur={() => {}}
                />
              </Tooltip>
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default GameTable;
