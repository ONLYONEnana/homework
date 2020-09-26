import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from 'antd';
import { debounce } from 'lodash';
import useDebounce from './useDebounce';
// import Throttle from 'lodash-decorators/throttle';

const Demo = () => {
  const [testValue, setTestValue] = useState('');

  const delaySearch = useCallback(
    debounce(v => {
      console.log('请求接口', v);
    }, 1000),
    [],
  );

  //   const [value, setValue] = useState('');
  //   const debValue = useDebounce(value, 2000);

  //   useEffect(() => {
  //     if (debValue) {
  //       console.log(debValue);
  //     } else {
  //       console.log('初始化中...');
  //     }
  //   }, [debValue]);

  const onChange = e => {
    setTestValue(e.target.value);
    delaySearch(e.target.value);
  };

  return (
    <>
      <Input placeholder="请输入用户名" onChange={onChange} />
    </>
  );
};

export default Demo;
