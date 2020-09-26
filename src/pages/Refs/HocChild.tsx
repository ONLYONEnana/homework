import React from 'react';
import { Input } from 'antd';
import logProps from './HocRefs';

// const HocChild = () => {
//   const handleOnChange = ({ target: { value } }) => {
//     console.log(value);
//   };
//   return <Input placeholder="请输入......" onChange={handleOnChange} />;
// };

class HocChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnChange = ({ target: { value } }) => {
    console.log(value);
  };

  render() {
    return <Input placeholder="请输入......" onChange={this.handleOnChange} />;
  }
}
export default logProps(HocChild);
