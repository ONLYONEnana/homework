import React, { useRef } from 'react';
import { Button } from 'antd';
import Child from './Child';
import ChildFunc from './ChildFunc';
import HocChild from './HocChild';

const Refs = () => {
  const buttonRef = useRef(null);
  const childRef = useRef(null);
  const childFuncRef = useRef(null);
  const hocChildRef = useRef(null);
  //   const buttonRef = React.createRef();

  const handleClick = () => {
    console.log(buttonRef);
    console.log(childRef);
    console.log(childFuncRef);
    console.log(hocChildRef);
  };
  return (
    <>
      <div>refs转发</div>
      <Child ref={childRef} />
      <ChildFunc ref={childFuncRef} />
      <div>高阶组件的refs转发</div>
      <HocChild ref={hocChildRef} />
      <Button ref={buttonRef} onClick={handleClick}>
        Click
      </Button>
    </>
  );
};

// class Refs extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.buttonRef = React.createRef();
//     // this.htmlRef = React.createRef();
//     this.childRef = React.createRef();
//     // this.childFuncRef = React.createRef();
//   }

//   handleClick = () => {
//     console.log(this.buttonRef);
//     console.log(this.htmlRef);
//     console.log(this.childRef);
//     console.log(this.childFuncRef);
//   };

//   render() {
//     return (
//       <>
//         <div
//           ref={c => {
//             this.htmlRef = c;
//           }}
//         >
//           refs转发
//         </div>
//         <Child ref={this.childRef} />
//         <ChildFunc
//           ref={r => {
//             this.childFuncRef = r;
//           }}
//         />
//         <Button ref={this.buttonRef} onClick={this.handleClick}>
//           Click
//         </Button>
//       </>
//     );
//   }
// }

export default Refs;
