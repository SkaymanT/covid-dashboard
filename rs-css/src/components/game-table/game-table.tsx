import * as React from 'react';
import './game-table.scss';
import { Tooltip } from 'antd';

type Props = {
  boardMarkup: IBoardMarkup[];
  changeFocus: (value: IBoardMarkup[]) => void;
};

export const GameTable: React.FC<Props> = ({ boardMarkup, changeFocus }) => {
  const handlerMouseEnter = (indexIn: number, indexElement: number) => {
    changeFocus(
      boardMarkup.map((item, index) => {
        if (indexIn === index) {
          if (indexElement === 0) {
            return { ...item, focus: [true, false, true] };
          } else if (indexElement === 1) {
            return { ...item, focus: [false, true, false] };
          } else if (indexElement === 2) {
            return { ...item, focus: [true, false, true] };
          }
        }
        return { ...item, focus: [false, false, false] };
      })
    );
  };

  const handlerMouseLeave = () => {
    changeFocus(
      boardMarkup.map((item) => {
        return { ...item, focus: [false, false, false] };
      })
    );
  };

  const createCode = (element: string[]) => {
    if (element[1] !== '' && element[2] !== '') {
      return `${element[0]} class="${element[1]}" id="${element[2]}"`;
    } else if (element[1] !== '' && element[2] === '') {
      return `${element[0]} class="${element[1]}"`;
    }
    else if (element[1] === '' && element[2] !== '') {
      return `${element[0]} id="${element[2]}"`;
    } else {
      return `${element[0]}`;
    }
  };

  return (
    <div className="game-table">
      {boardMarkup.map((item, index) => item.element[1][0] === '' ? (
        < Tooltip placement="top" title={`<${createCode(item.element[0])}></${item.element[0][0]}>`} visible={item.focus[0]} key={index} >
          <div
            className={!item.focus[0] ?
              `${item.element[0][0]} ${item.element[0][1]} 
              ${item.active[0] ? `certain` : ``}`
              :
              `${item.element[0][0]} ${item.element[0][1]}
              ${item.active[0] ? 'certain' : ''} hover-active`}
            id={item.element[0][2]}
            key={index}
            onMouseOver={(e) => {
              e.stopPropagation();
              handlerMouseEnter(index, 0);
            }}
            onMouseOut={() => {
              handlerMouseLeave();
            }}
          >
          </div>
        </Tooltip >
      ) :
        (
          <Tooltip placement="top" title={`<${createCode(item.element[0])}></${item.element[0][0]}>`} visible={item.focus[0]} key={index} >
            <div
              className={!item.focus[0] ?
                `${item.element[0][0]}  ${item.element[0][1]}
              ${item.active[0] ? 'certain' : ''}`
                :
                `${item.element[0][0]}  ${item.element[0][1]}
              ${item.active[0] ? 'certain' : ''} hover-active`}
              id={item.element[0][2]}
              key={index}
              onMouseOver={(e) => {
                e.stopPropagation();
                handlerMouseEnter(index, 0);
              }}
              onMouseOut={() => {
                handlerMouseLeave();
              }}
            >
              < Tooltip placement="top" title={`<${createCode(item.element[1])}></${item.element[1][0]}>`} visible={item.focus[1]} key={index} >
                <div
                  className={!item.focus[1] ?
                    `${item.element[1][0]}  ${item.element[1][1]}
              ${item.active[1] ? 'certain' : ''}`
                    :
                    `${item.element[1][0]}  ${item.element[1][1]}
              ${item.active[1] ? 'certain' : ''} hover-active`}
                  key={index}
                  id={item.element[1][2]}
                  onMouseOver={(e) => {
                    e.stopPropagation();
                    handlerMouseEnter(index, 1);
                  }}
                  onMouseOut={() => {
                    handlerMouseLeave();
                  }}
                >
                </div>
              </Tooltip>
            </div>
          </Tooltip>)
      )}
    </div >
  );
};
