import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Input } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* background-color: #282c34; */
  min-height: 100vh;
`;
const StyA = styled.a`
  display: inline-block;
  margin: 12px;
`;

function App() {
  const [val, setVal] = useState('');
  const inputEl = useRef(null);
  const keyPress = e => {
    if (e.keyCode === 13) {
      window.open(`https://3x.ant.design/components/${val}-cn/`);
      setVal('');
    }
  };
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <Wrapper onClick={() => inputEl.current.focus()}>
      <Row>
        <Col span={14} push={5}>
          <h2>跳转 Antd 组件 3.x </h2>
          <div>
            <Input
              ref={inputEl}
              className="input"
              value={val}
              onChange={e => setVal(e.target.value)}
              onKeyDown={keyPress}
            />
          </div>
          <StyA
            className="App-link"
            href="https://github.com/Acmu/gh-action-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Repo
          </StyA>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default App;
