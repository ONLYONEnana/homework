import React from 'react';
import { Select } from 'antd';

const ChildFunc = React.forwardRef((props, ref) => {
  const { Option } = Select;
  return (
    <>
      <Select ref={ref} defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </>
  );
});

export default ChildFunc;
