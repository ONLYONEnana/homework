import React, { useContext, ReactNode, Dispatch, createContext, useState } from 'react';
import { Button } from 'antd';

interface Props {
  children?: ReactNode;
}

interface Injected {
  counter: number;
  setCounter: Dispatch<any>;
  increment: any;
  decrement: any;
}

const context = createContext<Injected>({} as Injected);
const CounterProvider = ({ children }: Props) => {
  const [counter, setCounter] = useState(0);
  const value = {
    counter,
    setCounter,
    increment: () => {
      setCounter(counter + 1);
    },
    decrement: () => {
      setCounter(prev => prev - 1);
    },
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

function Counter() {
  const { counter = 0, increment, decrement } = useContext(context);

  return (
    <>
      <div>{counter}</div>
      <Button onClick={increment}>增加</Button>
      <Button onClick={decrement}>减少</Button>
    </>
  );
}

export default () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);
