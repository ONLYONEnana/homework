import React, { useState, useCallback } from 'react';
import { Select, Divider } from 'antd';

import ChildClass from './ChildClass';
import ChildFunc from './ChildFunc';

import EqualArr from './Equal';

// import MousePos from './PointerMovePosition';

import Counter from './context';

import Optimize from './Optimize';

const { Option } = Select;

const Example = () => {
  const nameArr = ['A', 'B', 'C', 'D'];
  const [name, setName] = useState('');

  const handleChange = useCallback(
    value => {
      setName(value);
    },
    [name],
  );

  return (
    <>
      <Select onChange={handleChange} placeholder="请选择姓名">
        {nameArr.map(item => {
          return (
            <Option value={item} key={item}>
              {item}
            </Option>
          );
        })}
      </Select>
      <ChildFunc userName={name} />
      <ChildClass userName={name} />

      <Divider style={{ border: '1px #ccc solid' }} />
      <EqualArr />

      <Divider style={{ border: '1px #ccc solid' }} />
      {/* <MousePos /> */}

      <Counter />

      <Divider style={{ border: '1px #ccc solid' }} />
      <Optimize />
    </>
  );
};

export default Example;
