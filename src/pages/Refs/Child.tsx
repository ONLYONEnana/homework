import React from 'react';

interface ChildState {
  parentid: number;
}

export default class Child extends React.Component<ChildState, {}> {
  constructor(props) {
    super(props);
    this.state = {
      parentid: 1,
    };
  }

  handleChange = () => {
    console.log('这是子组件的一些方法');
  };

  render() {
    return (
      <>
        <div>这是子组件{this.state.parentid}</div>
      </>
    );
  }
}
