import React, { useState } from 'react';

const Login = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = (incrementBy) => {
    const numberToIncrement = incrementBy || 1;
    setCount(count + numberToIncrement)
  }

  return (
    <div>
      <BigCountDisplay count={count} />
      <CounterButton onIcrement={handleIncrement} />
    </div>
  );
}

export default Login;