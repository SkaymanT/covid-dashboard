import React, { useEffect } from 'react';
import { useState } from 'react';
import './game-editor.scss';
import { Button, Input } from 'antd';
import Highlight from 'react-highlight';

type Props = {
  currentLevel: number;
  gameLevel: IGameLevel;
  changeCheck: (value: string) => void;
  changeHelp: () => void;
  changeFocus: (value: IBoardMarkup[]) => void;
};

export const GameEditor: React.FC<Props> = ({
  currentLevel,
  gameLevel,
  changeCheck,
  changeHelp,
  changeFocus,
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const classes = focus ? [] : ['input-animation'];
  const line = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const handlerClickEnter = () => {
    const res = searchWord(value, gameLevel.selector);
    res ? setIsError(false) : setIsError(true);
    res ? setIsSucces(true) : setIsSucces(false);
    setTimeout(() => {
      setIsError(false);
      setIsSucces(false);
      changeCheck(value);
    }, 300);
  };

  const searchWord = (word: string, array: string[]) => {
    return array.find((item) => item === word) === undefined ? false : true;
  };

  useEffect(() => {
    setValue('');
    setFocus(false);
    setIsError(false);
    setIsSucces(false);
  }, [currentLevel]);

  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value === '' ? setFocus(false) : setFocus(true);
    setValue(event.target.value);
  };

  const handlerMouseEnter = (indexIn: number, indexElement: number) => {
    changeFocus(
      gameLevel.boardMarkup.map((item, index) => {
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

  const handlerClickHelp = () => {
    setFocus(true);
    for (let index = 0; index < gameLevel.selector[0].length + 1; ++index) {
      setTimeout(() => {
        setValue(gameLevel.selector[0].slice(0, index));
      }, 100 * index);
    }
    changeHelp();
  };

  const handlerMouseLeave = () => {
    changeFocus(
      gameLevel.boardMarkup.map((item) => {
        return { ...item, focus: [false, false, false] };
      })
    );
  };

  const createCode = (element: string[]) => {
    if (element[1] !== '' && element[2] !== '') {
      return `${element[0]} class="${element[1]}" id="${element[2]}"`;
    } else if (element[1] !== '' && element[2] === '') {
      return `${element[0]} class="${element[1]}"`;
    } else if (element[1] === '' && element[2] !== '') {
      return `${element[0]} id="${element[2]}"`;
    } else {
      return `${element[0]}`;
    }
  };

  return (
    <div
      className={
        isError
          ? 'game-editor error'
          : `${isSucces ? 'succes' : ''} game-editor`
      }
    >
      <div className="editor-pane">
        <div className="input-header">
          <div>CSS Editor</div>
          <div>
            <Button ghost size="small" onClick={handlerClickHelp}>
              Help
            </Button>
          </div>
          <div>style.css</div>
        </div>
        <div className="css-view">
          <div className="line-numbers">
            {line.map((_, index) => {
              return (
                <div key={index}>
                  {index + 1} <br />
                </div>
              );
            })}
          </div>
          <Input
            className={classes.join(' ')}
            placeholder="Type in a CSS selector"
            bordered={false}
            onChange={handlerChangeInput}
            defaultValue=""
            onPressEnter={handlerClickEnter}
            value={value}
          />
          <Button type="primary" size="small" onClick={handlerClickEnter}>
            Enter
          </Button>
          <div>
            <br />
            /* Styles would go here. */
            <br />
          </div>
          <br />
          <div>
            /*
            <br />
            Type a number to skip to a level.
            <br />
            Ex → "5" for level 5
            <br />
            */
            <br />
          </div>
        </div>
      </div>
      <div className="editor-pane html-view">
        <div className="input-header">
          <div>HTML Viewer</div>
          <div>table.html</div>
        </div>
        <div className="file-window">
          <div className="line-numbers">
            {line.map((_, index) => {
              return (
                <div key={index}>
                  {index + 1} <br />
                </div>
              );
            })}
          </div>
          <div className="markup">
            <div>
              {' '}
              <Highlight className="html">{`<div class="table">`}</Highlight>
              {gameLevel.boardMarkup.map((item, index) =>
                item.element[1][0] === '' ? (
                  <div
                    className={item.focus[0] ? 'hover-active' : ''}
                    key={index}
                    onMouseOver={(e) => {
                      e.stopPropagation();
                      handlerMouseEnter(index, 0);
                    }}
                    onMouseOut={() => {
                      handlerMouseLeave();
                    }}
                  >
                    <Highlight className="html">
                      {`<${createCode(item.element[0])} />`}
                    </Highlight>
                  </div>
                ) : (
                  <div
                    className={item.focus[0] ? 'hover-active' : ''}
                    key={index}
                    onMouseOver={(e) => {
                      e.stopPropagation();
                      handlerMouseEnter(index, 0);
                    }}
                    onMouseLeave={() => {
                      handlerMouseLeave();
                    }}
                  >
                    <Highlight className="html">
                      {`<${createCode(item.element[0])}>`}
                    </Highlight>
                    <div
                      className={item.focus[1] ? 'hover-active' : ''}
                      key={index}
                      onMouseOver={(e) => {
                        e.stopPropagation();
                        handlerMouseEnter(index, 1);
                      }}
                      onMouseOut={() => {
                        handlerMouseLeave();
                      }}
                    >
                      <Highlight className="html">
                        {`<${createCode(item.element[1])} />`}
                      </Highlight>
                    </div>
                    <Highlight className="html">
                      {`</${item.element[0][0]}>`}
                    </Highlight>
                  </div>
                )
              )}
              <Highlight className="html">{`</div>`}</Highlight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
