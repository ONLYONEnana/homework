import React from 'react';
import { message, Button } from 'antd';

interface Props {
  userName: string;
}

class ChildClass extends React.Component<Props, {}> {
  showMessage = () => {
    message.success(`Followed ${this.props.userName}`);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <Button onClick={this.handleClick}>Show Class</Button>;
  }
}

export default ChildClass;
