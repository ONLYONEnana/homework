import React, { useMemo, useState, useCallback } from 'react';
import { Button, Input } from 'antd';

export default function Optimize() {
  const [target, setTarget] = useState(0);
  const [other, setOther] = useState(0);

  const sum = useMemo(() => {
    let _sum = 0;
    for (let i = 0; i <= target; i++) {
      _sum += 1;
    }
    return _sum;
  }, [target]);

  const handleChange = useCallback(e => {
    console.log(e.target.value);
    // setValue((e.target.value)
  }, []);

  return (
    <>
      <p>
        {target}: {sum}
      </p>
      <Input onChange={handleChange} />
      <Button onClick={() => setTarget(target + 1)}>递增</Button>
      <Button onClick={() => setTarget(target - 1)}>递减</Button>
      <br />
      <Button onClick={() => setOther(other + 1)}>递增</Button>
      <Button onClick={() => setOther(other - 1)}>递减</Button>
    </>
  );
}
