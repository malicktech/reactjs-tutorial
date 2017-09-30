import React from 'react';
import ProductTableFilters from './ProductTableFilters';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const PRODUCTS = {
  1: { id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet' },
  2: { id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello' },
  3: {
    id: 3,
    category: 'Musical Instruments',
    price: '$11,000',
    stocked: false,
    name: 'Fortepiano',
  },
  4: { id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge 2' },
  5: { id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table' },
  6: { id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag' },
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: PRODUCTS,
    };
    // binding theses in our constructor function so it doesn't lose a reference to  this  when triggered on its child
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
  }
  handleFilter(filterInput) {
    this.setState(filterInput);
  }
  saveProduct(product) {
    if (!product.id) {
      product.id = new Date().getTime();
    }
    this.setState((prevState) => {
      const products = prevState.products;
      products[product.id] = product;
      return { products };
    });
  }
  handleDestroy(productId) {
    this.setState((prevState) => {
      const products = prevState.products;
      delete products[productId];
      return { products };
    });
  }
  render() {
    return (
      <div>
        <ProductTableFilters
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilter={this.handleFilter}
        />

        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onDestroy={this.handleDestroy}
        />

        <ProductForm onSave={this.saveProduct} />
      </div>
    );
  }
}

export default Products;
