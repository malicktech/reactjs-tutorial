import React from 'react';

class ProductTableFilters extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />&nbsp;Only show stocked products
      </p>
      </form>
    );
  }
}

export default ProductTableFilters;