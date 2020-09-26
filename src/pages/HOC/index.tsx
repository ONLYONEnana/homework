import React from 'react';

const logProps = WrappedComponent => {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('current Props:', this.props);
      console.log('preious Props:', prevProps);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default logProps;
