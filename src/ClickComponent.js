import React from 'react';

// stateless functionnal

const ClickComponent = ({}) => {
  const handleClick = (event) => {
    // console.log(this);
    // or
    event.preventDefault();
    console.log('The link was clicked.');
  };
  return <button onClick={handleClick}>Click me</button>;
};

export default ClickComponent;
