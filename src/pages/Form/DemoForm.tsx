import React from 'react';
import { Form, Input } from 'antd';

type towNumberAdd = (a: number, b: number) => number;
interface searchFunc {
  (source: string, subString: string): boolean;
}

interface Props {}
interface formProps {
  validateFields: any;
}

type leetCode<T = {}> = {
  name: T;
};
interface obj<T, U> {
  id: T;
  name: U;
}

interface sizeAble {
  size?: number;
}

type defaultValue<T = string> = Array<T>;

type Partial<T> = { [P in keyof T]?: T[P] };

type FuncType = (value: number) => string;

const DemoForm = React.forwardRef((props: Props, ref: any) => {
  const [form] = Form.useForm();

  const getNumber: FuncType = arg => `${arg}`;

  const number: ReturnType<FuncType> = '1';

  console.log(number);

  const aa: defaultValue = ['1'];
  const bb: defaultValue<number> = [1];
  console.log(aa, bb);

  const a: leetCode<string> = { name: '类似' };
  console.log(a);

  const b: obj<number, string> = { id: 223, name: 'kkk' };
  console.log(b);

  const onChange = e => {
    console.log(e);
  };

  function getId<T, U>(param1: T, param2: U): [T, U] {
    return [param1, param2];
  }

  getId('id', 8888);
  getId(121, { a: 1 });

  function trace<T extends sizeAble>(arg: T): T {
    console.log(arg.size);
    return arg;
  }

  trace({ size: 12 });
  trace<{ a: number; size: number }>({ a: 12, size: 11 });

  return (
    <Form form={form} ref={ref}>
      <Form.Item label="用户名" name="username">
        <Input onChange={onChange} />
      </Form.Item>
    </Form>
  );
});

export default DemoForm;
