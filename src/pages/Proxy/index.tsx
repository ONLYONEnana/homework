import React from 'react';

import { Checkbox } from 'antd';

const obj = {
  title: 'proxy',
  data: [],
  _private_prop: '私有属性',
  getPrivate() {
    return this._private_prop;
  },
};

const invariant = (target, key) => {
  if (!target[key]) {
    throw new RangeError(`访问对象不存在 ${key} 属性`);
  }
  if (key[0] === '_') {
    throw new Error(`${key} 是私有属性，禁止进行任何的操作`);
  }
};

const protectObj = targetObj => {
  return new Proxy(targetObj, {
    deleteProperty(target, key) {
      invariant(target, key);
      delete target[key];
      return true;
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter(key => {
        return key[0] !== '_' && typeof target[key] !== 'function';
      });
    },
  });
};

const myProxy = protectObj(obj);
delete myProxy.title;

const image = (() => {
  const node = document.createElement('img');
  document.getElementById('root').appendChild(node);
  return {
    setSrc(src) {
      node.src = src;
    },
  };
})();

const proxyImage = (() => {
  const img = new Image();
  img.onload = function() {
    image.setSrc(this.src);
  };
  return {
    setSrc(src) {
      image.setSrc(require('../../assets/loading.gif'));
      img.src = src;
    },
  };
})();

// https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg
proxyImage.setSrc('');

const uploadFile = id => {
  console.log(`上传文件`, id);
};

const proxyUpload = (() => {
  let cache = [];
  let timer;
  return ids => {
    cache = ids;
    if (timer) return;
    timer = setTimeout(() => {
      uploadFile(cache.join(','));
      clearTimeout(timer);
      timer = null;
      cache = [];
    }, 2000);
  };
})();

function template(str) {
  const result = str
    .split('')
    .sort()
    .join('');
  return result;
}

const dictionary = ['top', 'host', 'pot', 'shot', 'see', 'hots'];
function find(str) {
  const temp = template(str);
  const result = [];
  for (let i = 0; i < dictionary.length; i++) {
    const curTemp = template(dictionary[i]);

    if (curTemp === temp) {
      result.push(dictionary[i]);
    }
  }
  return `符合${str}的有：${result}`;
}

const proxyFind = (function() {
  const cache = {};
  return function(word) {
    if (word in cache) {
      console.log('直接从缓存中取值');
      return cache[word];
    }
    return (cache[word] = find.apply(this, [word]));
  };
})();

// const result = proxyFind('shot');
// const result2 = proxyFind('shot');
// console.log(result);
// console.log(result2);

function A() {
  // 复杂计算
  return 'A';
}

function B() {
  // 复杂计算
  return 'B';
}

function createCacheFactory(fn) {
  const cache = {};
  return function(...rest) {
    const param = rest.join(',');
    if (param in cache) return cache[param];
    return (cache[param] = fn.apply(this, rest));
  };
}

// const proxyA = createCacheFactory(A);
// const proxyB = createCacheFactory(B);

const uniqueA = function(arr) {
  const set = new Set(arr);
  return Array.from(set);
};

const uniqueB = function(arr) {
  const tmp = new Map();
  return arr.filter(item => !tmp.has(item) && tmp.set(item, 1));
};

// const isValidUserName = function() {
//   // 验证
// };

// const isValidPwd = function() {
//   // 同 isValidUserName 的验证逻辑
// };

const Demo = () => {
  const options = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
  ];

  const handleChange = value => {
    proxyUpload(value);
  };

  return (
    <>
      <Checkbox.Group options={options} onChange={handleChange} />
    </>
  );
};

export default Demo;
