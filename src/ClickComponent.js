import React from 'react';

// stateless functionnal

const ClickComponent = ({}) => {
  const handleClick = (event) => {
    console.log(this);
  };
  return <button onClick={handleClick}>Click me</button>;
};

export default ClickComponent;
