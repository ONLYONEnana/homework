import React from 'react';
// import { allData } from './all';
// import { oneData } from './1';

// Object.keys(allData).forEach(key => {
//   if (Object.prototype.hasOwnProperty.call(oneData, key)) {
//     allData[key] = oneData[key];
//   }
// });

// console.log(JSON.stringify(allData));

type AxiosError = { isAxiosError: boolean; testProperty: string };
function isError(error: any): error is AxiosError {
  return error.isAxiosError;
}

const a = isError({ isAxiosError: false });
console.log(a);

type Person = {
  name: string;
  sex: string;
  flag: boolean;
  data: object;
  hair: string;
};

function Foo<T>() {
  return function(param: T) {
    console.log(param);
    return param;
  };
}

const myFoo = Foo<boolean>();
myFoo(true);

const enum Directions {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

const directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

console.log(directions); // ['UP', 'DOWN', 'LEFT', 'RIGHT']

export default function Demo() {
  return <>Generator 语法以及应用</>;
}
