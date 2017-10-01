import React from 'react';

/**
 * 
 * https://reactjs.org/docs/lists-and-keys.html 
 */
function NumberList(props) {
  const mylist = props.mylist;
  const listItems = mylist.map(product => (
    // Correct! Key should be specified inside the array.
    <ListItem key={product.id} value={product.name} category={product.category} />
  ));
  return (
    <div>
      <p>Basic List Component</p>
      <ul>{listItems}</ul>
    </div>
  );
}

export default NumberList;

/**
 * ListItem component
 * @param {*} props 
 */
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return (
    <li>
      {props.value} / {props.category}
    </li>
  );
}
