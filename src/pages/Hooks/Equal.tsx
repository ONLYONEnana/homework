import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'antd';

const equalArr = (a: number[], b: number[]) => {
  if (a.length !== b.length) {
    return false;
  }
  if (a.length === 0 && b.length === 0) {
    return true;
  }
  return a.every((item, i) => item === b[i]);
};

const useEqualArr = () => {
  const [arrA, setArrA] = useState<number[]>([]);
  const [arrB, setArrB] = useState<number[]>([]);
  const isEqual = equalArr(arrA, arrB);
  return { arrA, setArrA, arrB, setArrB, isEqual };
};

const EqualArr = () => {
  const { arrA, setArrA, arrB, setArrB, isEqual } = useEqualArr();

  return (
    <>
      <Row style={{ width: 600 }}>
        <Col span={10}>
          <Card style={{ width: 200 }}>
            <div>
              <Button
                onClick={() => {
                  setArrA([1, ...arrA]);
                }}
              >
                新增1
              </Button>
            </div>

            {arrA.map(item => (
              <div key={Math.random()}>{item}</div>
            ))}
            <div>
              <Button
                onClick={() => {
                  setArrA([...arrA, 2]);
                }}
              >
                新增2
              </Button>
            </div>
          </Card>
        </Col>
        <Col span={4}>{JSON.stringify(isEqual)}</Col>
        <Col span={10}>
          <Card>
            <div>
              <Button
                onClick={() => {
                  setArrB([1, ...arrB]);
                }}
              >
                新增1
              </Button>
            </div>

            {arrB.map(item => (
              <div key={Math.random()}>{item}</div>
            ))}
            <div>
              <Button
                onClick={() => {
                  setArrB([...arrB, 2]);
                }}
              >
                新增2
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EqualArr;
