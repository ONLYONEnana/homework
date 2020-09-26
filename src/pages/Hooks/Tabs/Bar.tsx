import React, { memo, useCallback } from 'react';
import { Row, Col, Button } from 'antd';

const uuid = () => {
  return String(Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * 10 ** 6));
};

const actionMap = {
  newly: '新建表',
  edit: '表详情',
};

interface BarProps {
  addTabs: any;
}

const Bar = memo((props: BarProps) => {
  const handleClick = useCallback(
    action => {
      props.addTabs({
        type: 'ADD_TAB',
        payload: { type: action, tab: actionMap[action], key: uuid() },
      });
    },
    [props.addTabs],
  );
  return (
    <Row justify="space-between">
      <Col>
        <Button
          onClick={() => {
            handleClick('newly');
          }}
        >
          新建
        </Button>
        <Button
          onClick={() => {
            handleClick('edit');
          }}
        >
          详情
        </Button>
        <Button
          onClick={() => {
            handleClick('single_import');
          }}
        >
          编辑
        </Button>
      </Col>
    </Row>
  );
});

export default Bar;
