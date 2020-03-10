import React, { useRef, useEffect } from 'react';
import { Row, Col, Select } from 'antd';
import styled from 'styled-components';

import { comps } from './data';

const { Option } = Select;
const Wrapper = styled.div`
  background-color: #f0f0f0;
  min-height: 100vh;
`;
const StyA = styled.a`
  display: inline-block;
  margin: 12px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;
  font-size: 20px;
  font-weight: 500;
`;

function App() {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const getOpts = () => {
    return comps.map(item => (
      <Option key={item} value={item}>
        {item}
      </Option>
    ));
  };

  function onChange(value) {
    console.log(`selected ${value}`);
    window.open(`https://3x.ant.design/components/${value}-cn/`);
  }

  return (
    <Wrapper onClick={() => inputEl.current.focus()}>
      <Row>
        <Col span={14} push={5}>
          <Header>
            跳转 Antd 组件 3.x{' '}
            <StyA
              className="App-link"
              href="https://github.com/Acmu/gh-action-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Repo
            </StyA>
          </Header>
          <div>
            <Select
              showSearch
              size="large"
              ref={inputEl}
              style={{ width: 500 }}
              placeholder="请选择一个组件，然后按回车"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) => {
                const iText = input.toLowerCase();
                const oText = option.children.toLowerCase();
                const iSpread = [...iText];
                let restOText = oText;
                let idx = 0;
                for (; idx < iSpread.length; idx++) {
                  if (restOText.includes(iSpread[idx])) {
                    restOText = restOText.slice(
                      restOText.indexOf(iSpread[idx]) + 1
                    );
                  } else {
                    break;
                  }
                }
                return idx === iSpread.length;
              }}
            >
              {getOpts()}
            </Select>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default App;
