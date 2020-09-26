import React from 'react';
import { Form, Button } from 'antd';

import RangeNumber from '../Range';

const Demo = () => {
  const onFinish = values => {
    console.log(values);
  };

  const handleOnChange = e => {
    console.log(e);
  };
  return (
    // <Form
    //   name="test"
    //   initialValues={{
    //     range: { preNumber: 1, nextNumber: 1 },
    //   }}
    //   onFinish={onFinish}
    // >
    //   <Form.Item label="替换区间" name="range">
    //     <RangeNumber style={{ width: 55 }} />
    //   </Form.Item>
    //   <Form.Item>
    //     <Button htmlType="submit" type="primary">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
    <div>
      <RangeNumber onChange={handleOnChange} />
    </div>
  );
};

export default Demo;
