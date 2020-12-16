import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';

import './game-editor.scss';

type Props = {
  currentLevel: number;
  gameLevel: IGameLevel;
  changeCheck: (value: string) => void;
  changeHelp: () => void;
  changeFocus: (value: IBoardMarkup[]) => void;
};

const GameEditor: React.FC<Props> = ({
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
  let i = 0;

  const handlerClickEnter = () => {
    const res = gameLevel.selector.find(item => item === value) !== undefined;
    if (res) {
      setIsError(false);
      setIsSucces(true);
    } else {
      setIsError(true);
      setIsSucces(false);
    }
    setTimeout(() => {
      setIsError(false);
      setIsSucces(false);
      changeCheck(value);
    }, 300);
  };

  useEffect(() => {
    setValue('');
    setFocus(false);
    setIsError(false);
    setIsSucces(false);
  }, [currentLevel]);

  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setFocus(false);
    } else {
      setFocus(true);
    }
    setValue(event.target.value);
  };

  const handlerMouseEnter = (indexIn: number, indexElement: number) => {
    changeFocus(
      gameLevel.boardMarkup.map((item, index) => {
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

  const handlerClickHelp = () => {
    setFocus(true);
    for (let index = 0; index < gameLevel.selector[0].length + 1; index += 1) {
      setTimeout(() => {
        setValue(gameLevel.selector[0].slice(0, index));
      }, 100 * index);
    }
    changeHelp();
  };

  const handlerMouseLeave = () => {
    changeFocus(gameLevel.boardMarkup.map(item => ({ ...item, focus: [false, false, false] })));
  };

  const createCode = (element: string[]) => {
    if (element[1] !== '' && element[2] !== '') {
      return (
        <code>
          {'<div class='}
          <span className="code-string">{`"${element[1]}"`}</span>
          {' '}
          {' class='}
          <span className="code-string">{`"${element[2]}"`}</span>
          {'>'}
        </code>
      );
    }
    if (element[1] !== '' && element[2] === '') {
      return (
        <code>
          {'<div class='}
          <span className="code-string">{`"${element[1]}"`}</span>
          {'>'}
        </code>
      );
    }
    if (element[1] === '' && element[2] !== '') {
      return (
        <code>
          {'<div id='}
          <span className="code-string">{`"${element[2]}"`}</span>
          {'>'}
        </code>
      );
    }
    return <code>{`<${element[0]} />`}</code>;
  };

  return (
    <div className={isError ? 'game-editor error' : `${isSucces ? 'succes' : ''} game-editor`}>
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
            {line.map(item => (
              <div key={item}>
                {item}
                <br />
              </div>
            ))}
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
        </div>
      </div>
      <div className="editor-pane html-view">
        <div className="input-header">
          <div>HTML Viewer</div>
          <div>table.html</div>
        </div>
        <div className="file-window">
          <div className="line-numbers">
            {line.map(item => (
              <div key={item}>
                {item}
                <br />
              </div>
            ))}
          </div>
          <div className="markup">
            <div>
              <code>
                {'<div class='}
                <span className="code-string">&quot;table&quot;</span>
                {'>'}
              </code>
              {gameLevel.boardMarkup.map((item, index) => {
                i += 1;
                return item.element[1][0] === '' ? (
                  <div
                    className={item.focus[0] ? 'hover-active' : ''}
                    key={`${i}`}
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
                    {createCode(item.element[0])}
                  </div>
                ) : (
                  <div
                    className={item.focus[0] ? 'hover-active' : ''}
                    key={`${i}`}
                    onMouseOver={e => {
                      e.stopPropagation();
                      handlerMouseEnter(index, 0);
                    }}
                    onMouseLeave={() => {
                      handlerMouseLeave();
                    }}
                    onFocus={() => {}}
                    onBlur={() => {}}
                  >
                    {createCode(item.element[0])}
                    <div
                      className={item.focus[1] ? 'hover-active' : ''}
                      key={`${i}`}
                      onMouseOver={e => {
                        e.stopPropagation();
                        handlerMouseEnter(index, 1);
                      }}
                      onMouseOut={() => {
                        handlerMouseLeave();
                      }}
                      onFocus={() => {}}
                      onBlur={() => {}}
                    >
                      {createCode(item.element[1])}
                    </div>
                    <code>{`</${item.element[0][0]}>`}</code>
                  </div>
                );
              })}
              <code>{'</div>'}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameEditor;
