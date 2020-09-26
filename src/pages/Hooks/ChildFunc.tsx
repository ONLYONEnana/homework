import React from 'react';
import { message, Button } from 'antd';

interface Props {
  userName: string;
}
const ChildFunc = (props: Props) => {
  const showMessage = () => {
    message.success(`Followed ${props.userName}`);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return <Button onClick={handleClick}>Show Func</Button>;
};

export default ChildFunc;
