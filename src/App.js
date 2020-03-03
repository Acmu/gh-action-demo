import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState('');
  const inputEl = useRef(null);
  const keyPress = e => {
    if (e.keyCode == 13) {
      window.open(`https://3x.ant.design/components/${val}-cn/`);
      setVal('');
    }
  };
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return (
    <div className="App" onClick={() => inputEl.current.focus()}>
      <header className="App-header">
        <p
          style={{
            margin: 0
          }}
        >
          <strong>跳转 Antd 组件 3.x</strong>
        </p>
        <div>
          <input
            ref={inputEl}
            className="input"
            value={val}
            onChange={e => setVal(e.target.value)}
            onKeyDown={keyPress}
          />
        </div>
        <a
          className="App-link"
          href="https://github.com/Acmu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn MinYuan
        </a>
      </header>
    </div>
  );
}

export default App;
