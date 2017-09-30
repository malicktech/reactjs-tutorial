import React from 'react';

/**
 * have a button component that changes the background color of its parent component when clicked.
 */
const ChangeColorButton = (props) => {
  const handleClick = () => {
    // In order to be able to refer to  this  in our callback, we'll need to explicitly bind in on our instance.
    props.clickHandler();
    console.log('clicked');
  };

  return <button onClick={handleClick}>I dont like {props.currentColor}</button>;
};

export default ChangeColorButton;
