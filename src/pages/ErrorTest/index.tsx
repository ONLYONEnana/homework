import React, { useEffect } from 'react';

const Demo = () => {
  window.onerror = msg => {
    console.log('onerror', msg);
  };

  function fetch(callback) {
    setTimeout(() => {
      console.log('请求失败');
    });
  }

  fetch(() => {
    console.log('请求处理');
  });

  useEffect(() => {
    // a();
  }, []);

  return <div>test</div>;
};

export default Demo;
