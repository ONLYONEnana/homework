import { string, number } from 'prop-types';
import { Props } from 'react';

function mixin(sourceObj, targetObj) {
  for (const key in sourceObj) {
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
}

const Vehicle = {
  engines: 1,
  ignition() {
    console.log('Turning on my engine');
  },
};

type T0 = NonNullable<string | number | undefined>;

declare function f1(): { a: number; b: string };

type K = typeof f1;
type T1 = ReturnType<typeof mixin>;

interface Props {
  a?: number;
  b?: string;
}

type KK = Required<Props>;
const person: KK = {
  s: '232',
  age: 12,
};

console.log(person);
